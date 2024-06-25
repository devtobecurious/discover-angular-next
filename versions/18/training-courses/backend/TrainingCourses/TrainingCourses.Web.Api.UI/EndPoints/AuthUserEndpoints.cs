using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TrainingCourses.Web.Api.UI.Models;

namespace TrainingCourses.Web.Api.UI.EndPoints
{
    public static class AuthUserEndpoints
    {
        public static void MapAuthUserEndpoints(this IEndpointRouteBuilder routes)
        {
            var group = routes.MapGroup("/api/authenticate").WithTags(nameof(User));

            group.MapPost("/login", async (UserManager<CustomIdentityUser> userManager, [FromBody] User user) =>
            {
                var result = await userManager.FindByEmailAsync(user.Login);

                if (result == null)
                {
                    return Results.Problem("Email is not found");
                }

                var isValidUser = await userManager.CheckPasswordAsync(result, user.Password);
                if (!isValidUser)
                {
                    return Results.Problem("Password is invalid");
                }

                return Results.Ok(new AuthUser()
                {
                    Login = result.Email,
                    Token = "",
                    Email = result.Email,
                    Surname = result.UserName
                });
            })
            .WithName("login")
            .WithOpenApi();

            group.MapPost("/new", async (UserManager<CustomIdentityUser> userManager, [FromBody] CreateUser user) =>
            {
                var identityUser = new CustomIdentityUser()
                {
                    Email = user.Email,
                    Id = user.Email,
                    UserName = user.Login
                };

                var result = await userManager.CreateAsync(identityUser, user.Password);

                if (result.Errors.Any())
                {
                    return Results.Problem("bad user");
                }

                var returnUser = new AuthUser()
                {
                    Login = identityUser.Email,
                    Token = "",
                    Email = identityUser.Email,
                    Surname = identityUser.UserName
                };

                return Results.Ok(returnUser);
            })
            .WithName("new")
            .WithOpenApi();

            group.MapPost("/logout", () =>
            {
                return new[] { new User() };
            })
            .RequireAuthorization()
            .WithName("logout")
            .WithOpenApi();
        }
    }
}
