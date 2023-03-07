export interface AuthenticateUser {
  email: string;
  password: string;
  jwt?: {
    key: string
  }
}
