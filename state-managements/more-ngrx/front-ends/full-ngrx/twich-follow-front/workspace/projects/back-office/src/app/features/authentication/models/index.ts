export type ApiAuthUser = {
  access_token: string,
}

export type ApiError = {
  message: string,
  statusCode: number
}

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

export interface AuthenticateStateWithToken extends AuthenticatedUser, WithToken {
}

export interface ToLogUserWithToken extends ToLogUser, WithToken {
}
