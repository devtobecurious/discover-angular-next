using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using TrainingCourses.Web.Api.UI.Models;

namespace TrainingCourses.Web.Api.UI.Tools
{
    public static class TokenEndpoint
    {
        public static string CreateToken(JwtOptions jwtOptions)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOptions.SigningKey));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(jwtOptions.Issuer,
                                             jwtOptions.Audience,
                                             expires: DateTime.Now.AddMinutes(30),
                                             signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
