import { applyEach, required, schema, validate, validateHttp } from "@angular/forms/signals";
import { Step, stepSchema } from "./step";

export interface Journey {
    id: number;
    title: string;
    description: string;
    steps: Step[];
}

export const journeySchema = schema<Journey>(ctx => {
    required(ctx.title, { message: "Title is required" });
    required(ctx.description, { message: "Description is required" });
    applyEach(ctx.steps, stepSchema);

    validate(ctx, childCtx => {
        if (childCtx.valueOf(ctx.steps).length === 0) {
            return { kind: 'main' , message: "At least one step is required" };
        }

        return null;
    });

    validateHttp(ctx.title, {
        request: (ctx) => '/api/journey/validate-title?title=' + encodeURIComponent(ctx.value()),
        onSuccess: (response: { valid: boolean }) => {
            if(! response.valid) {
                return { kind: 'main', message: "Title is already taken" };
            }

            return null;
        },
        onError: (error) => {
            console.info("Error while validating title", error);
            return { kind: 'networkError', message: "Could not able to verify title" };
        }
    })
});

export const emptyJourney: Journey = {
    id: 0,
    title: '',  
    description: '',
    steps: []
};