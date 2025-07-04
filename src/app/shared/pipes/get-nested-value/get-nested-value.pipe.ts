import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getNestedValue'
})
export class GetNestedValuePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
