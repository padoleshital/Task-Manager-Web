using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager.Domain.Common
{
    public abstract class BaseEntity
    {
        public Guid Id { get; protected set; } = Guid.NewGuid();
        public DateTime CreatedAt { get; protected set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; protected set; }
        public string? CreatedBy { get; protected set; }

        public void SetCreatedBy(string userId) => CreatedBy = userId;
        public void SetUpdatedAt() => UpdatedAt = DateTime.UtcNow;
    }
}
