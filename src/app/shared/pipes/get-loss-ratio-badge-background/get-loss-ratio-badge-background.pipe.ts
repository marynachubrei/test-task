import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getLossRatioBadgeBackground', standalone: true,
})
export class GetLossRatioBadgeBackgroundPipe implements PipeTransform {

  transform(ratio: number): string {

    if (isNaN(ratio)) return '';

    if (ratio < 35) return 'green';
    if (ratio <= 60) return 'yellow';
    return 'red';
  }

}
