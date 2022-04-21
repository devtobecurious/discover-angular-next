export interface Tile {
  isRevealed: boolean;
  value: number;
  id: number;
}

export interface TileCell extends Tile {
  css: string
}

/** change state and css value of the current cell */
export const changeStateCell = (cell: TileCell, isRevealed: boolean, clicked: boolean = false) => {
  cell.isRevealed = isRevealed;
  cell.css = 'tile';

  if (cell.isRevealed) {
    cell.css += ' flipped';
  }

  if (! cell.isRevealed && clicked) {
    cell.css += ' covered';
  }
}

