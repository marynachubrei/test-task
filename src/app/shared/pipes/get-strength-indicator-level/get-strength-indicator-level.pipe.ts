import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getStrengthIndicatorLevel'
})
export class GetStrengthIndicatorLevelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
