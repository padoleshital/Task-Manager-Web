using Microsoft.AspNetCore.Mvc;

namespace Task_Manager_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AIController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("AI API is working");
        }
    }
}
