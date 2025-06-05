import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toGame'
})
export class ToGamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
