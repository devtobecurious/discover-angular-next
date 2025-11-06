import { applyEach, minLength, required, schema } from "@angular/forms/signals";
import { Friend, friendSchema } from "./friend";

export interface GameSession {
  startDate: string;
  startTime: string;
  friends: Friend[];
  gameName: string;
}


export const createEmptySession = (): GameSession => {
  return {
    friends: [],
    gameName: '',
    startDate: '',
    startTime: ''
  }
}

export const sessionSchema = schema<GameSession>(context => {
  required(context.gameName);
  minLength(context.gameName, 3);
  required(context.startDate);
  required(context.startTime);
  applyEach(context.friends, friendSchema);
});
