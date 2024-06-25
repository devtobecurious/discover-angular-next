namespace TrainingCourses.Web.Api.UI.Models
{
    public class User
    {
        public string? Login { get; set; }
        public string? Password { get; set; }
    }

    public class CreateUser : User
    {
        public string? Surname { get; set; }
        public string? Email { get; set; }
    }

    public class AuthUser : CreateUser
    {
        public string? Token { get; set; }
    }
}
