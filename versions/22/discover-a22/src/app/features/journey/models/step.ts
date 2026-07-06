import { apply, applyEach, max, min, required, schema } from "@angular/forms/signals";
import { Person, personSchema } from "./people";
import { Place, placeSchema } from "./place";

export interface Step {
    id: number;
    place: Place;
    peopleSeen: Person[];
    coolness: number;
    comments: string;
}

export const stepSchema = schema<Step>(ctx => {
    apply(ctx.place, placeSchema);
    applyEach(ctx.peopleSeen, personSchema);
    min(ctx.coolness, 1, { message: "Coolness must be at least 1" });
    max(ctx.coolness, 5, { message: "Coolness must be at most 5" });
    required(ctx.comments, { message: "Comments are required", when: childCtx => childCtx.valueOf(ctx.coolness) < 3 });
})