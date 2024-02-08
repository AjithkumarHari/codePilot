import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(date: Date): number{
    let currentDate: Date = new Date();
    let dob: Date = new Date(date);
    let age: number = currentDate.getFullYear()-dob.getFullYear();
    return age;
  }

}
