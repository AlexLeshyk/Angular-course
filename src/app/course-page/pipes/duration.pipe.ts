import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})

export class DurationPipe implements PipeTransform {
  transform(num: number): string {
    if(num > 0 && num/60 < 1) {
      return num + ' min';
    } else {
      return Math.round(num/60) + ' h ' + (num%60) +' min';
    }
  }
}
