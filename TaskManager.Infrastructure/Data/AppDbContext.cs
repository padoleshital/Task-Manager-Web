using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System.Text.Json;
using TaskManager.Domain.Common;
using TaskManager.Domain.Entities;

namespace TaskManager.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // DbSets
        public DbSet<TaskItem> Tasks => Set<TaskItem>();

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<TaskItem>(entity =>
            {
                entity.HasKey(t => t.Id);

                entity.Property(t => t.Title)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(t => t.Description)
                    .HasMaxLength(2000);

                entity.Property(t => t.Status)
                    .HasConversion<string>();

                entity.Property(t => t.Priority)
                    .HasConversion<string>();

                // Store Tags list as JSON string in a single column
                var tagsConverter = new ValueConverter<List<string>, string>(
                    v => JsonSerializer.Serialize(v, (JsonSerializerOptions?)null),
                    v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions?)null) ?? new List<string>()
                );

                var tagsComparer = new ValueComparer<List<string>>(
                    (c1, c2) => JsonSerializer.Serialize(c1, (JsonSerializerOptions?)null) ==
                                JsonSerializer.Serialize(c2, (JsonSerializerOptions?)null),
                    c => c.GetHashCode(),
                    c => JsonSerializer.Deserialize<List<string>>(
                             JsonSerializer.Serialize(c, (JsonSerializerOptions?)null),
                             (JsonSerializerOptions?)null) ?? new List<string>()
                );

                entity.Property(t => t.Tags)
                    .HasConversion(tagsConverter)
                    .Metadata.SetValueComparer(tagsComparer);

                entity.Property(t => t.AzureDevOpsWorkItemId)
                    .HasMaxLength(100);

                entity.Property(t => t.CreatedBy)
                    .HasMaxLength(100);
            });
        }

        // ── SaveChanges — auto-sets UpdatedAt on every save ───────
        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            SetAuditFields();
            return await base.SaveChangesAsync(cancellationToken);
        }

        public override int SaveChanges()
        {
            SetAuditFields();
            return base.SaveChanges();
        }

        private void SetAuditFields()
        {
            IEnumerable<EntityEntry<BaseEntity>> entries = ChangeTracker
                .Entries<BaseEntity>()
                .Where(e => e.State == EntityState.Modified);

            foreach (var entry in entries)
                entry.Entity.SetUpdatedAt();
        }
    }
}
