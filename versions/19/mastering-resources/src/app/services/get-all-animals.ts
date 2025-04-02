import { Injectable } from "@angular/core";

export interface Animal {
  id: number
  name: string
  specy: string
}

@Injectable({
  providedIn: 'root'
})
export class GetAllAnimals {

}
