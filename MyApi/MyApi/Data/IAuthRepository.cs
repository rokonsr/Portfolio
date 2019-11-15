using MyApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApi.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string strPassword);
        Task<User> Login(string strUsername, string strPassword);
        Task<bool> IsExists(string strUsername);
    }
}
