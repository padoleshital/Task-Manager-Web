using Microsoft.EntityFrameworkCore;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces;
using TaskManager.Infrastructure.Data;

namespace TaskManager.Infrastructure.Data
{
    public class TaskRepository : ITaskRepository
    {
        private readonly AppDbContext _db;

        public TaskRepository(AppDbContext db) => _db = db;

        public async Task<TaskItem?> GetByIdAsync(Guid id, CancellationToken ct = default)
            => await _db.Tasks.FirstOrDefaultAsync(t => t.Id == id, ct);

        public async Task<List<TaskItem>> GetAllAsync(CancellationToken ct = default)
            => await _db.Tasks.OrderByDescending(t => t.CreatedAt).ToListAsync(ct);

        public async Task<List<TaskItem>> GetByAssigneeAsync(Guid assigneeId, CancellationToken ct = default)
            => await _db.Tasks
                .Where(t => t.AssigneeId == assigneeId)
                .OrderByDescending(t => t.AiPriorityScore)
                .ToListAsync(ct);

        public async Task<List<TaskItem>> GetByTeamAsync(Guid teamId, CancellationToken ct = default)
            => await _db.Tasks
                .Where(t => t.TeamId == teamId)
                .OrderByDescending(t => t.AiPriorityScore)
                .ToListAsync(ct);

        public async Task AddAsync(TaskItem task, CancellationToken ct = default)
            => await _db.Tasks.AddAsync(task, ct);

        public Task UpdateAsync(TaskItem task, CancellationToken ct = default)
        {
            _db.Tasks.Update(task);
            return Task.CompletedTask;
        }

        public async Task DeleteAsync(Guid id, CancellationToken ct = default)
        {
            var task = await _db.Tasks.FindAsync(new object[] { id }, ct);
            if (task is not null)
                _db.Tasks.Remove(task);
        }
    }
}
