import { Injector, Type, inject } from "@angular/core";
import { Observable, defer } from "rxjs";

export type PromiseLoader<T> = () => Promise<Type<T>>;

export function loadService<T>(loader: PromiseLoader<T>): Observable<T> {
  const injector = inject(Injector);
  return defer(() => loader().then(serviceClass => {
    const instance = injector.get(serviceClass);
    return instance;
  }));
}
