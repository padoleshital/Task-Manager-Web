using TaskManager.Domain.Entities;

namespace TaskManager.Domain.Interfaces
{
    public interface ITaskRepository
    {
        Task<TaskItem?> GetByIdAsync(Guid id, CancellationToken ct = default);
        Task<List<TaskItem>> GetAllAsync(CancellationToken ct = default);
        Task<List<TaskItem>> GetByAssigneeAsync(Guid assigneeId, CancellationToken ct = default);
        Task<List<TaskItem>> GetByTeamAsync(Guid teamId, CancellationToken ct = default);
        Task AddAsync(TaskItem task, CancellationToken ct = default);
        Task UpdateAsync(TaskItem task, CancellationToken ct = default);
        Task DeleteAsync(Guid id, CancellationToken ct = default);
    }
}
