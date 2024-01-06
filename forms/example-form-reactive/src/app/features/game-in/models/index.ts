export interface Game {
  id: number;
  label: string
}

export type Games = Game[];

export interface SocialNetwork {
  id: number;
  label: string;
  description: string;
}

export type SocialNetworks = SocialNetwork[];

export interface GameConsole {
  id: number;
  label: string;
  version: number;
}

export type GameConsoles = GameConsole[];
