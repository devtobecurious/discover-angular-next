export interface VideoGame {
  title: string
  episode_id: number
}

export type VideoGameResponse = {
  results: VideoGame[]
}
