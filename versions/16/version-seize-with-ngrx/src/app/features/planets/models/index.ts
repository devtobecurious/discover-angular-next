/**
 * Planet model interface definition for the application. This is the model that will be used throughout the application.
 */
export interface Planet {
  id: number,
  label: string;
}

export type Planets = Planet[];

