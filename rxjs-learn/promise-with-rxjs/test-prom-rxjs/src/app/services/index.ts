import { combineLatest, concatMap, from, map, mergeMap, Observable } from "rxjs";

export type ResultsApi<T> = {
  results: T[]
}

export type CharactersApi = ResultsApi<{name: string}>;
export type MoviesApi = ResultsApi<{title: string, characters: string[]}>;

export type Movies = {title: string, characters?: { name: string }[] }[];

export async function getAllFromApi<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getAllPersons(): Promise<CharactersApi> {
  return getAllFromApi<CharactersApi>('https://swapi.dev/api/people');
}

export function getAllPersonsAsObs(): Observable<CharactersApi> {
  return from(getAllPersons());
}

export async function getAllMovies(): Promise<MoviesApi> {
  return getAllFromApi<MoviesApi>('https://swapi.dev/api/films');
}

export function getAllMoviesAsObs(): Observable<MoviesApi> {
  return from(getAllMovies());
}

export function getMoviesWithCharacters(): Observable<Movies> {
  return getAllMoviesAsObs().pipe(
    mergeMap(movies => getAllPersonsAsObs().pipe(
                       map(characters => {
                          const array: Movies = [];

                          movies.results.forEach(item => {
                            const newMovie: {title: string, characters?: {name:string}[]} = {title: item.title};

                            newMovie.characters = characters.results.map(char => ({ name: char.name }));

                            array.push(newMovie)
                          });

                          return array;
                       })))
  );

  // return combineLatest([
  //   getAllMovies(),
  //   getAllPersons()
  // ]).pipe(
  //   map(values => {
  //     const array: Movies = [];

  //     values[0].results.forEach(item => {
  //       const newMovie: {title: string, characters?: {name:string}[]} = {title: item.title};

  //       newMovie.characters = values[1].results.map(char => ({ name: char.name }));

  //       array.push(newMovie)
  //     });

  //     return array;
  //   })
  // )
}
