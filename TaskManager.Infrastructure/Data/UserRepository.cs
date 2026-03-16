using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager.Infrastructure.Data
{
    public class UserRepository 
    {
        private readonly AppDbContext _db;
        public UserRepository(AppDbContext db) => _db = db;

        //public async Task<User?> GetByIdAsync(Guid id, CancellationToken ct = default)
        //    => await _db.Users.FindAsync(new object[] { id }, ct);

        //public async Task<User?> GetByEmailAsync(string email, CancellationToken ct = default)
        //    => await _db.Users.FirstOrDefaultAsync(u => u.Email == email, ct);

        //public async Task<User?> GetByAzureAdObjectIdAsync(string objectId, CancellationToken ct = default)
        //    => await _db.Users.FirstOrDefaultAsync(u => u.AzureAdObjectId == objectId, ct);

        //public async Task AddAsync(User user, CancellationToken ct = default)
        //    => await _db.Users.AddAsync(user, ct);
    }
}
