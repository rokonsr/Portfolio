using Microsoft.EntityFrameworkCore;
using MyApi.Common;
using MyApi.Data;
using MyApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApi.Repository
{
    public class AuthRepository : IAuthRepository
    {
        private ServiceHandler serviceHandler = new ServiceHandler();
        private readonly DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<bool> IsExists(string strUsername)
        {
            if (await _context.Users.AnyAsync(x=>x.Username == strUsername))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<User> Login(string strUsername, string strPassword)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == strUsername);

            if (user == null)
            {
                return null;
            }

            if (!serviceHandler.VerifyPasswordHash(strPassword, user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }
            else
            {
                return user;
            }
        }

        public async Task<User> Register(User user, string strPassword)
        {
            byte[] btPasswordHash, btPasswordSalt;

            serviceHandler.CreatePasswordHash(strPassword, out btPasswordHash, out btPasswordSalt);
            user.PasswordHash = btPasswordHash;
            user.PasswordSalt = btPasswordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }
    }
}
