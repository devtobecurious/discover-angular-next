export interface AuthenticateUser {
  login: string,
  password: string
}

export interface WithToken {
  token: string
}

export interface AuthenticateStateWithToken extends AuthenticateUser, WithToken {
}
