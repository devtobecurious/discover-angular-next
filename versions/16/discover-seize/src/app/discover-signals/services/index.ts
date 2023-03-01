import { effect, signal } from "@angular/core";

export const counter = signal(0);

const itemEffect = effect(() => {
  console.log('MyValue changed', counter());
});


export const init = (value = 10) => {
  counter.set(10);
}

export const increase = (value = 1) => {
  counter.update(item => item + value);
}


