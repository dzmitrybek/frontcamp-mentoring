import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(value: any[] = [], searchText: string = '', prop: string = 'name'): any {
    return value.filter((item) => (item[prop] as string).startsWith(searchText) );
  }

}
