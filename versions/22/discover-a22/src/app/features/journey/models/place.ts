import { required, schema } from "@angular/forms/signals";

export interface Place {
    id: number;
    name: string;
}

export const placeSchema = schema<Place>(ctx => {
    required(ctx.name, { message: "Name is required"  });
})