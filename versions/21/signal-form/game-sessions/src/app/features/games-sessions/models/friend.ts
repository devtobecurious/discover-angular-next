import { required, schema } from "@angular/forms/signals";

export interface Friend {
  surname: string;
  firstname: string;
}

export const friendSchema = schema<Friend>(context => {
  required(context.firstname)
});

export const createEmptyFriend = (): Friend => {
  return {
    firstname: '',
    surname: ''
  }
}
