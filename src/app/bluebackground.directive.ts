import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBluebackground]'
})
export class BluebackgroundDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "red"
  }

  @HostListener('mouseover')
  mouseOver() {
    this.el.nativeElement.style.color = "green"
  }
}
