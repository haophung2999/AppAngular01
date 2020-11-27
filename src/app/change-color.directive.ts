import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(elcolor : ElementRef) {
    elcolor.nativeElement.style.color = 'red';
  }

}
