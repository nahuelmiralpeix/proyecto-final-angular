import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ciclos'
})
export class CiclosPipe implements PipeTransform {
  

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value=='DAM') {
      
    }else if(value=='DAW'){

    }
    return null;
  }

}
