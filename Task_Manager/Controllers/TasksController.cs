using Microsoft.AspNetCore.Mvc;
using TaskManager.Application.DTOs;
using TaskManager.Application.Interfaces;

namespace Task_Manager_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public TasksController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        // GET api/tasks
        [HttpGet]
        public async Task<ActionResult<List<TaskItemDto>>> GetAll(CancellationToken ct)
        {
            var tasks = await _taskService.GetAllAsync(ct);
            return Ok(tasks);
        }

        // GET api/tasks/{id}
        [HttpGet("{id:guid}")]
        public async Task<ActionResult<TaskItemDto>> GetById(Guid id, CancellationToken ct)
        {
            var task = await _taskService.GetByIdAsync(id, ct);
            return task is null ? NotFound() : Ok(task);
        }

        // GET api/tasks/assignee/{assigneeId}
        [HttpGet("assignee/{assigneeId:guid}")]
        public async Task<ActionResult<List<TaskItemDto>>> GetByAssignee(Guid assigneeId, CancellationToken ct)
        {
            var tasks = await _taskService.GetByAssigneeAsync(assigneeId, ct);
            return Ok(tasks);
        }

        // GET api/tasks/team/{teamId}
        [HttpGet("team/{teamId:guid}")]
        public async Task<ActionResult<List<TaskItemDto>>> GetByTeam(Guid teamId, CancellationToken ct)
        {
            var tasks = await _taskService.GetByTeamAsync(teamId, ct);
            return Ok(tasks);
        }

        // POST api/tasks
        [HttpPost]
        public async Task<ActionResult<TaskItemDto>> Create([FromBody] CreateTaskItemDto dto, CancellationToken ct)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _taskService.CreateAsync(dto, ct);
            return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
        }

        // PUT api/tasks/{id}
        [HttpPut("{id:guid}")]
        public async Task<ActionResult<TaskItemDto>> Update(Guid id, [FromBody] UpdateTaskItemDto dto, CancellationToken ct)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var updated = await _taskService.UpdateAsync(id, dto, ct);
            return updated is null ? NotFound() : Ok(updated);
        }

        // DELETE api/tasks/{id}
        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id, CancellationToken ct)
        {
            var deleted = await _taskService.DeleteAsync(id, ct);
            return deleted ? NoContent() : NotFound();
        }
    }
}
