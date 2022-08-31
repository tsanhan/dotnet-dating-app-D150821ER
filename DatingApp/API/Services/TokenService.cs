using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.Extensions.Configuration;

using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System;

namespace API.Services
{
    public class TokenService : ITokenService
    {
        // * symmetric means same key is used to encrypt AND decrypt - in our case sign and verify) 
        // * asymmetric means different keys, public and private (how https/ssl works);
        // jwt uses symmetric key because this key not leaving the server

        private readonly SymmetricSecurityKey _key;

        public TokenService(IConfiguration config)
        {
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }
        
        public string CreateToken(AppUser user)
        {
            //adding claims to token:
            var claims = new List<Claim> {
                new Claim(JwtRegisteredClaimNames.NameId, user.UserName)
            };

            // adding credentials, need the key and algorithm
            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            // describe our token (how it's going to look)
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds
            };

            // after creating our token, we need token handler to create it
            var tokenHandler = new JwtSecurityTokenHandler();

            // create token
            var token = tokenHandler.CreateToken(tokenDescriptor);

            // return token
            return tokenHandler.WriteToken(token);
        }
    }
}