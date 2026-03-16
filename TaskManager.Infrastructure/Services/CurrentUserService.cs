using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using TaskManager.Domain.Interfaces;

namespace TaskManager.Infrastructure.Services
{

    // ── Current User (reads JWT claims) ──────────────────────────
    public class CurrentUserService : ICurrentUserService
    {
    //    private readonly IHttpContextAccessor _http;

    //    public CurrentUserService(IHttpContextAccessor http) => _http = http;

    //    public string UserId =>
    //        _http.HttpContext?.User?.FindFirst("oid")?.Value
    //        ?? _http.HttpContext?.User?.FindFirst("sub")?.Value
    //        ?? string.Empty;

    //    public string Email =>
    //        _http.HttpContext?.User?.FindFirst("preferred_username")?.Value
    //        ?? _http.HttpContext?.User?.FindFirst("email")?.Value
    //        ?? string.Empty;

    //    public bool IsAuthenticated => _http.HttpContext?.User?.Identity?.IsAuthenticated ?? false;
    //}

    //// ── Global Exception Middleware ───────────────────────────────
    //public class ExceptionMiddleware
    //{
    //    private readonly RequestDelegate _next;
    //    private readonly ILogger<ExceptionMiddleware> _logger;

    //    public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
    //    {
    //        _next = next; _logger = logger;
    //    }

    //    public async Task InvokeAsync(HttpContext ctx)
    //    {
    //        try
    //        {
    //            await _next(ctx);
    //        }
    //        catch (KeyNotFoundException ex)
    //        {
    //            _logger.LogWarning(ex, "Not found");
    //            await WriteError(ctx, HttpStatusCode.NotFound, ex.Message);
    //        }
    //        catch (UnauthorizedAccessException ex)
    //        {
    //            _logger.LogWarning(ex, "Unauthorized");
    //            await WriteError(ctx, HttpStatusCode.Forbidden, ex.Message);
    //        }
    //        catch (Exception ex)
    //        {
    //            _logger.LogError(ex, "Unhandled exception");
    //            await WriteError(ctx, HttpStatusCode.InternalServerError, "An unexpected error occurred.");
    //        }
    //    }

    //    private static async Task WriteError(HttpContext ctx, HttpStatusCode code, string message)
    //    {
    //        ctx.Response.StatusCode = (int)code;
    //        ctx.Response.ContentType = "application/json";
    //        await ctx.Response.WriteAsync(JsonSerializer.Serialize(new { error = message }));
    //    }
    }
}
