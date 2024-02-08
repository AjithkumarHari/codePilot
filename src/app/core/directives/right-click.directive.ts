import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRightClick]'
})
export class RightClickDirective {

  constructor(private elementRef: ElementRef) {}

  @HostListener('contextmenu',['$event'])
  on(event:MouseEvent){
    event.preventDefault()
  }

}
