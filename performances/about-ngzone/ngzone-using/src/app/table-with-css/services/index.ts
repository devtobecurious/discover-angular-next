import { Injectable } from "@angular/core";
import { ProductType } from "../models";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root"
})
export class ShoppingCart {
  private _state = new BehaviorSubject<ProductType[]>([]);

  addTo(product: ProductType): void {
    const array =  [...this._state.value];

    array.push(product);

    this._state.next(array);
  }

  get state(): Observable<ProductType[]> {
    return this._state.asObservable();
  }
}

