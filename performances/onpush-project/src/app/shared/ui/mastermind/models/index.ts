export interface Tile {
  isRevealed: boolean;
  value: number;
}

export interface TileCell extends Tile {
  css: string
}

/** change state and css value of the current cell */
export const changeStateCell = (cell: TileCell, isRevealed: boolean) => {
  cell.isRevealed = isRevealed;
  cell.css = 'tile';

  if (cell.isRevealed) {
    cell.css += ' flipped';
  }
}
