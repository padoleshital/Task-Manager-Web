using TaskManager.Domain.Common;
using TaskManager.Domain.Enums;

namespace TaskManager.Domain.Entities
{
    public class TaskItem : BaseEntity
    {
        public string Title { get; private set; } = default!;
        public string? Description { get; private set; }
        public AppTaskStatus Status { get; private set; }
        public TaskPriority Priority { get; private set; }
        public int AiPriorityScore { get; private set; }
        public Guid TeamId { get; private set; }
        public Guid AssigneeId { get; private set; }
        public DateTime? DueDate { get; private set; }
        public string? AzureDevOpsWorkItemId { get; private set; }
        public List<string> Tags { get; private set; } = new();

        // EF Core parameterless constructor
        private TaskItem() { }

        // Factory constructor for creating new tasks
        public TaskItem(
            string title,
            string? description,
            AppTaskStatus status,
            TaskPriority priority,
            int aiPriorityScore,
            Guid teamId,
            Guid assigneeId,
            DateTime? dueDate,
            string? azureDevOpsWorkItemId,
            List<string>? tags,
            string createdBy)
        {
            Title = title;
            Description = description;
            Status = status;
            Priority = priority;
            AiPriorityScore = aiPriorityScore;
            TeamId = teamId;
            AssigneeId = assigneeId;
            DueDate = dueDate;
            AzureDevOpsWorkItemId = azureDevOpsWorkItemId;
            Tags = tags ?? new List<string>();
            CreatedBy = createdBy;
            CreatedAt = DateTime.UtcNow;
        }

        // Domain methods
        public void Update(
            string title,
            string? description,
            AppTaskStatus status,
            TaskPriority priority,
            Guid assigneeId,
            DateTime? dueDate,
            List<string>? tags)
        {
            Title = title;
            Description = description;
            Status = status;
            Priority = priority;
            AssigneeId = assigneeId;
            DueDate = dueDate;
            Tags = tags ?? Tags;
            SetUpdatedAt();
        }

        public void UpdatePriority(TaskPriority priority)
        {
            Priority = priority;
            SetUpdatedAt();
        }

        public void ChangeStatus(AppTaskStatus status)
        {
            Status = status;
            SetUpdatedAt();
        }
    }
}
