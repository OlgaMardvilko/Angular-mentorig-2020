import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time' })

export class TimePipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    console.log('hours', hours);
    const minutesLeft = minutes % 60;
    if (!hours) {
      return `${minutesLeft < 10 ? '0' : ''}${minutesLeft}min`;
    }
    return `${hours}h ${minutesLeft < 10 ? '0' : ''}${minutesLeft}min`;
  }
}
