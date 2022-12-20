export type PeopleResult = {
  name: string,
  height: number,
  eye_color: string
}

export type ApiPersonResult = {
  results: PeopleResult[]
}
