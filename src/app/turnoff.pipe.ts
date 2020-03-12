import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turnoff'
})
export class TurnoffPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
