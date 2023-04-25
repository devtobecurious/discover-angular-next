export interface ToLogUser {
  login: string,
  password: string
}

export interface WithToken {
  token: string
}

export interface WithIsLogged {
  isLogged: boolean
}

export interface AuthenticatedUser extends ToLogUser, WithIsLogged {

}

export interface AuthenticateStateWithToken extends ToLogUser, WithToken {
}
