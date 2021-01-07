import { WookiesState } from "src/app/features/wookies/store/reducers/wookie.reducer";

export interface Wookie {
  id: number;
  displayId: number;
  name: string;
  size: number;
}

export function compareWookies(wookie1: Wookie, wookie2: Wookie): number {
  const diff = wookie1.displayId - wookie2.displayId;
  let result = 0;

  if (diff > 0) {
    result = 1;
  }
  if (diff < 0) {
    result = -1;
  }

  return result;
}
