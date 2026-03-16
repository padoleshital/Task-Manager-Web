using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Application.Interfaces;

namespace TaskManager.Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _db;         
        
        //public ITaskRepository Tasks { get; }
        //public IUserRepository Users { get; }
        //public ITeamRepository Teams { get; }

        public UnitOfWork(AppDbContext db)
        {
            _db = db;
            //Tasks = new TaskRepository(db);
            //Users = new UserRepository(db);
            //Teams = new TeamRepository(db);
        }

        public async Task<int> SaveChangesAsync(CancellationToken ct = default)
            => await _db.SaveChangesAsync(ct);
    }
}
