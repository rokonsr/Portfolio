using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApi.Common
{
    public class ServiceHandler
    {
        internal void CreatePasswordHash(string strPassword, out byte[] btPasswordHash, out byte[] btPasswordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                btPasswordSalt = hmac.Key;
                btPasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(strPassword));
            }
        }

        internal bool VerifyPasswordHash(string strPassword, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var strComputedPassword = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(strPassword));

                for (int i = 0; i < strComputedPassword.Length; i++)
                {
                    if (passwordHash[i] != strComputedPassword[i])
                    {
                        return false;
                    }
                }
            }
            return true;
        }
    }
}
