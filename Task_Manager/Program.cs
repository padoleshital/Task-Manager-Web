using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using TaskManager.Application.Interfaces;
using TaskManager.Domain.Interfaces;
using TaskManager.Infrastructure.Data;
using TaskManager.Infrastructure.Services;
using TaskRepository = TaskManager.Infrastructure.Data.TaskRepository;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// ── Authentication (Azure AD B2C) ─────────────────────────────
//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//    .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));

//Database
//builder.Services.AddDbContext<AppDbContext>(options =>
//    options.UseSqlServer(
//        builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        b => b.MigrationsAssembly("TaskManager.Infrastructure")));

//services.AddDbContext<AppDbContext>(options =>
//    options.UseSqlServer(connectionString,
//        b => b.MigrationsAssembly("TaskManager.Infrastructure")));


// ── Repositories & UnitOfWork ─────────────────────────────────
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<ITaskRepository, TaskRepository>();


// ── Application Services ──────────────────────────────────────
builder.Services.AddScoped<ITaskService, TaskService>();
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<ICurrentUserService, CurrentUserService>();

// ── CORS ──────────────────────────────────────────────────────
builder.Services.AddCors(opt => opt.AddDefaultPolicy(p =>
    p.WithOrigins(builder.Configuration["Frontend:Url"] ?? "http://localhost:5173")
     .AllowAnyHeader().AllowAnyMethod().AllowCredentials()));

// ── Swagger ───────────────────────────────────────────────────
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "TaskManager API", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        [new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" } }] = Array.Empty<string>()
    });
});


builder.Services.AddControllers();

var app = builder.Build();

// ── Middleware pipeline ───────────────────────────────────────
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();
app.UseAuthentication();

app.UseAuthorization();
//app.UseMiddleware<ExceptionMiddleware>();

//app.MapHub<TaskHub>("/hubs/tasks");

// ── Auto-migrate on startup (dev only) ───────────────────────
if (app.Environment.IsDevelopment())
{
    using var scope = app.Services.CreateScope();
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    await db.Database.MigrateAsync();
}

app.MapControllers();

app.Run();
