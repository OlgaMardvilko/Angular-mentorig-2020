import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], field: string, filterValue: string): any[] {
    if (!Array.isArray(array) || !field || !filterValue) {
      return;
    }
    return array.filter(item => item[field].toLocaleLowerCase().includes(filterValue));
  }
}
