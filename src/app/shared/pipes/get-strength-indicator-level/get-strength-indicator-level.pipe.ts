import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getStrengthIndicatorLevel',
  standalone: true,
})
export class GetStrengthIndicatorLevelPipe implements PipeTransform {

  transform(level: string): number {
    switch (level) {
      case 'Weak':
        return 1;
      case 'Medium':
        return 2;
      case 'Strong':
        return 3;
      case 'Very Strong':
        return 4;
      default:
        return 0;
    }
  }

}
