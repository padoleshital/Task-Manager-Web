using Microsoft.AspNetCore.Mvc;

namespace Task_Manager_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Auth API is working");
        }
    }
}
