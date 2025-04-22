export interface Movie {
  id?: number;
  title: string;
  poster_path?: string;
  overview: string;
  release_date: Date;
  vote_average?: number;
}

export type MovieList = Movie[];
