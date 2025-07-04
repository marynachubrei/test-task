import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getLossRatioBadgeBackground'
})
export class GetLossRatioBadgeBackgroundPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
