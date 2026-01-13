import { applyEach, min, required, schema, validate } from "@angular/forms/signals";

export interface Ingredient {
  name: string;
  quantity: string;
}

export const ingredientFormSchema = schema<Ingredient>(context => {
  required(context.name);
  required(context.quantity);
});

export interface Cake {
  id: number;
  name: string;
  flavor: string;
  price: number;
  ingredients: Ingredient[];
}

export const cakeFormSchema = schema<Cake>(context => {
  required(context.name);
  required(context.flavor);
  min(context.price, 1);
  applyEach(context.ingredients, ingredientFormSchema);
});
