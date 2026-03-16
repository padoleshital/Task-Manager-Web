using TaskManager.Application.DTOs;
using TaskManager.Application.Interfaces;
using TaskManager.Domain.Entities;
using TaskManager.Domain.Interfaces;

namespace TaskManager.Infrastructure.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _taskRepo;
        private readonly IUnitOfWork _unitOfWork;

        public TaskService(ITaskRepository taskRepo, IUnitOfWork unitOfWork)
        {
            _taskRepo = taskRepo;
            _unitOfWork = unitOfWork;
        }

        public async Task<List<TaskItemDto>> GetAllAsync(CancellationToken ct = default)
        {
            var tasks = await _taskRepo.GetAllAsync(ct);
            return tasks.Select(MapToDto).ToList();
        }

        public async Task<TaskItemDto?> GetByIdAsync(Guid id, CancellationToken ct = default)
        {
            var task = await _taskRepo.GetByIdAsync(id, ct);
            return task is null ? null : MapToDto(task);
        }

        public async Task<List<TaskItemDto>> GetByAssigneeAsync(Guid assigneeId, CancellationToken ct = default)
        {
            var tasks = await _taskRepo.GetByAssigneeAsync(assigneeId, ct);
            return tasks.Select(MapToDto).ToList();
        }

        public async Task<List<TaskItemDto>> GetByTeamAsync(Guid teamId, CancellationToken ct = default)
        {
            var tasks = await _taskRepo.GetByTeamAsync(teamId, ct);
            return tasks.Select(MapToDto).ToList();
        }

        public async Task<TaskItemDto> CreateAsync(CreateTaskItemDto dto, CancellationToken ct = default)
        {
            var task = new TaskItem(
                title: dto.Title,
                description: dto.Description,
                status: dto.Status,
                priority: dto.Priority,
                aiPriorityScore: dto.AiPriorityScore,
                teamId: dto.TeamId,
                assigneeId: dto.AssigneeId,
                dueDate: dto.DueDate,
                azureDevOpsWorkItemId: dto.AzureDevOpsWorkItemId,
                tags: dto.Tags,
                createdBy: "system"  // TODO: replace with ICurrentUserService
            );

            await _taskRepo.AddAsync(task, ct);
            await _unitOfWork.SaveChangesAsync(ct);

            return MapToDto(task);
        }

        public async Task<TaskItemDto?> UpdateAsync(Guid id, UpdateTaskItemDto dto, CancellationToken ct = default)
        {
            var task = await _taskRepo.GetByIdAsync(id, ct);
            if (task is null) return null;

            task.Update(
                title: dto.Title,
                description: dto.Description,
                status: dto.Status,
                priority: dto.Priority,
                assigneeId: dto.AssigneeId,
                dueDate: dto.DueDate,
                tags: dto.Tags
            );

            await _taskRepo.UpdateAsync(task, ct);
            await _unitOfWork.SaveChangesAsync(ct);

            return MapToDto(task);
        }

        public async Task<bool> DeleteAsync(Guid id, CancellationToken ct = default)
        {
            var task = await _taskRepo.GetByIdAsync(id, ct);
            if (task is null) return false;

            await _taskRepo.DeleteAsync(id, ct);
            await _unitOfWork.SaveChangesAsync(ct);
            return true;
        }

        // ─── Mapper ──────────────────────────────────────────────────────────
        private static TaskItemDto MapToDto(TaskItem t) => new()
        {
            Id = t.Id,
            Title = t.Title,
            Description = t.Description,
            Status = t.Status,
            Priority = t.Priority,
            AiPriorityScore = t.AiPriorityScore,
            TeamId = t.TeamId,
            AssigneeId = t.AssigneeId,
            DueDate = t.DueDate,
            AzureDevOpsWorkItemId = t.AzureDevOpsWorkItemId,
            Tags = t.Tags,
            CreatedAt = t.CreatedAt,
            UpdatedAt = t.UpdatedAt,
            CreatedBy = t.CreatedBy
        };
    }
}
