
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  b: string;
  @Input() c: string='Yellow';
  constructor() { }

  @HostListener("mouseenter") mouseup()
  {
  //this.b="Yellow";
  this.b=this.c;
  }
  @HostListener("mouseleave") mouseleave()
  {
  this.b="gray";
  }
  @HostBinding("style.background-color") get setcolor1(){
    return this.b;
  }
}
