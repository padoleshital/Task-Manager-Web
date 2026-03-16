using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Domain.Entities;

namespace TaskManager.Infrastructure.Data
{
    public class Repositories
    {
        private readonly AppDbContext _db;
        public Repositories(AppDbContext db) => _db = db;

        //public async Task<TaskItem?> GetByIdAsync(Guid id, CancellationToken ct = default)
        //    => await _db.Tasks.Include(t => t.Assignee).FirstOrDefaultAsync(t => t.Id == id, ct);

        //public async Task<List<TaskItem>> GetByTeamIdAsync(Guid teamId, CancellationToken ct = default)
        //    => await _db.Tasks.Include(t => t.Assignee)
        //        .Where(t => t.TeamId == teamId)
        //        .OrderByDescending(t => t.AiPriorityScore)
        //        .ToListAsync(ct);

        //public async Task<List<TaskItem>> GetByAssigneeAsync(Guid userId, CancellationToken ct = default)
        //    => await _db.Tasks.Include(t => t.Assignee)
        //        .Where(t => t.AssigneeId == userId)
        //        .ToListAsync(ct);

        //public async Task<List<TaskItem>> GetTopPriorityAsync(Guid userId, int count = 3, CancellationToken ct = default)
        //    => await _db.Tasks
        //        .Where(t => t.AssigneeId == userId && t.Status != Domain.Enums.TaskStatus.Done)
        //        .OrderByDescending(t => t.AiPriorityScore)
        //        .ThenBy(t => t.DueDate)
        //        .Take(count)
        //        .ToListAsync(ct);
        //public async Task<TaskItem?> GetByIdAsync(Guid id, CancellationToken ct = default)
        //    => await _db.Tasks.Include(t => t.Assignee).FirstOrDefaultAsync(t => t.Id == id, ct);

        //public async Task<List<TaskItem>> GetByTeamIdAsync(Guid teamId, CancellationToken ct = default)
        //    => await _db.Tasks.Include(t => t.Assignee)
        //        .Where(t => t.TeamId == teamId)
        //        .OrderByDescending(t => t.AiPriorityScore)
        //        .ToListAsync(ct);

        //public async Task<List<TaskItem>> GetByAssigneeAsync(Guid userId, CancellationToken ct = default)
        //    => await _db.Tasks.Include(t => t.Assignee)
        //        .Where(t => t.AssigneeId == userId)
        //        .ToListAsync(ct);

        //public async Task<List<TaskItem>> GetTopPriorityAsync(Guid userId, int count = 3, CancellationToken ct = default)
        //    => await _db.Tasks
        //        .Where(t => t.AssigneeId == userId && t.Status != Domain.Enums.TaskStatus.Done)
        //        .OrderByDescending(t => t.AiPriorityScore)
        //        .ThenBy(t => t.DueDate)
        //        .Take(count)
        //        .ToListAsync(ct);

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
            if (task is not null) _db.Tasks.Remove(task);
        }
    }
}

    

    

    
