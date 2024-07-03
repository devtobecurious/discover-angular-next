namespace TrainingCourses.Web.Api.UI.Models
{
    public record class JwtOptions(
        string Issuer,
        string Audience,
        string SigningKey,
        int ExpirationSeconds
    );
}
