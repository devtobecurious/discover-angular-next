import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hurlement'
})
export class HurlementPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('roaaaa');
    return value + '... Roooorrrr !';
  }

}
