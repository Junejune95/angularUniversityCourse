import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlight]',
  exportAs:'hl'
})
export class HighlightDirective {
  @Input('highlight')
  isHighlighted = false;

  @Output()
  toggleHighlight=new EventEmitter();

  constructor() {
    console.log("directive create ......");
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled(){
    return true;
  }

  @HostListener('mouseover')
  mouseOver(){
    this.isHighlighted=true;
    this.toggleHighlight.emit(this.isHighlighted);

  }

  @HostListener('mouseleave',['$event'])
  mouseLeave($event){
    this.isHighlighted=false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle(){
    this.isHighlighted=!this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }

}
