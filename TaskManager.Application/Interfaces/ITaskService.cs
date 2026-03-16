using TaskManager.Application.DTOs;

namespace TaskManager.Application.Interfaces
{
    public interface ITaskService
    {
        Task<List<TaskItemDto>> GetAllAsync(CancellationToken ct = default);
        Task<TaskItemDto?> GetByIdAsync(Guid id, CancellationToken ct = default);
        Task<List<TaskItemDto>> GetByAssigneeAsync(Guid assigneeId, CancellationToken ct = default);
        Task<List<TaskItemDto>> GetByTeamAsync(Guid teamId, CancellationToken ct = default);
        Task<TaskItemDto> CreateAsync(CreateTaskItemDto dto, CancellationToken ct = default);
        Task<TaskItemDto?> UpdateAsync(Guid id, UpdateTaskItemDto dto, CancellationToken ct = default);
        Task<bool> DeleteAsync(Guid id, CancellationToken ct = default);
    }
}
