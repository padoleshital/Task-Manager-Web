using Microsoft.AspNetCore.Mvc;

namespace Task_Manager_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeamController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Team API is working");
        }
    }
}
