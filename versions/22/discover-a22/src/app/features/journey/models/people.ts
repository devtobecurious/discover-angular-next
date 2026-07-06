import { required, schema } from "@angular/forms/signals";

export interface Person {
    id: number;
    name: string;
}

export const personSchema = schema<Person>(ctx => {
    required(ctx.name, { message: "Name is required"  });
})