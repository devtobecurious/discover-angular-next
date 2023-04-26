export interface VoteAction {
  option: string
}

export type NavigationType = 'PUSH' | 'POP' | 'REPLACE';

export interface NavigationAction {
  type: NavigationType;
  route: string;
}
