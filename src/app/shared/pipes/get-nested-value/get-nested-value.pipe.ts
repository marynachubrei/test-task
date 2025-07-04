import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getNestedValue',
  standalone: true,
})
export class GetNestedValuePipe implements PipeTransform {

  transform(obj: any, path: string): any {
    if (!obj || !path) return '';
    return path.split('.').reduce((acc, part) => acc?.[part], obj) ?? '';
  }
}
