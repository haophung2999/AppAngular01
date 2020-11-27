import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(elRef : ElementRef) {
    elRef.nativeElement.style.color = 'red';
  }

}
