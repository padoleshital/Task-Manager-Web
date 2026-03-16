using TaskManager.Domain.Enums;

namespace TaskManager.Application.DTOs
{
    // ─── Response DTO ────────────────────────────────────────────────────────
    public class TaskItemDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = default!;
        public string? Description { get; set; }
        public AppTaskStatus Status { get; set; }
        public TaskPriority Priority { get; set; }
        public int AiPriorityScore { get; set; }
        public Guid TeamId { get; set; }
        public Guid AssigneeId { get; set; }
        public DateTime? DueDate { get; set; }
        public string? AzureDevOpsWorkItemId { get; set; }
        public List<string> Tags { get; set; } = new();
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string? CreatedBy { get; set; }
    }

    // ─── Create DTO ──────────────────────────────────────────────────────────
    public class CreateTaskItemDto
    {
        public string Title { get; set; } = default!;
        public string? Description { get; set; }
        public AppTaskStatus Status { get; set; } = AppTaskStatus.Todo;
        public TaskPriority Priority { get; set; } = TaskPriority.Medium;
        public int AiPriorityScore { get; set; }
        public Guid TeamId { get; set; }
        public Guid AssigneeId { get; set; }
        public DateTime? DueDate { get; set; }
        public string? AzureDevOpsWorkItemId { get; set; }
        public List<string>? Tags { get; set; }
    }

    // ─── Update DTO ──────────────────────────────────────────────────────────
    public class UpdateTaskItemDto
    {
        public string Title { get; set; } = default!;
        public string? Description { get; set; }
        public AppTaskStatus Status { get; set; }
        public TaskPriority Priority { get; set; }
        public Guid AssigneeId { get; set; }
        public DateTime? DueDate { get; set; }
        public List<string>? Tags { get; set; }
    }
}
