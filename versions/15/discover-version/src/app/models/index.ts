export type PeopleResult = {
  name: string,
  height: number,
  eye_color: string
}

export type ApiPersonResult = {
  results: PeopleResult[]
}

export type MovieResult = {
  title: string
}

export type ApiMovieResult = {
  results: MovieResult[]
}
