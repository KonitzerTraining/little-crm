import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: number, rate: number): number {
    return value * rate;
  }

}
