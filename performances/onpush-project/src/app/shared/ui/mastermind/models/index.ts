export interface Tile {
  isRevealed: boolean;
  value: number;
}

export interface TileCell extends Tile {
  css: string
}
