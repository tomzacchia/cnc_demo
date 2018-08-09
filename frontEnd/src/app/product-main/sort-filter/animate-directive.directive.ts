import { Directive,
         HostBinding,
         HostListener,
         Input,
         ElementRef} from '@angular/core';

@Directive({
  selector: '[appAnimateDirective]'
})
export class AnimateDirectiveDirective {
  @Input() className: string;
  childClicked = false;
  parentInnerText = '';
  childInnerText = '';

  @HostBinding('class') classes = '';
  constructor(
    private elRef: ElementRef,
  ) { }

  // Adds classes to parent container so that chevron animates on click
  @HostListener('click', ['$event'] ) onclick(event: any) {

    // parent will be Filter & Sort by text
    // children are other clicks
    if ( this.parentInnerText === '' ) {
      this.parentInnerText = event.target.innerText;
    } else {
      this.childInnerText = event.target.innerText;
    }

    if ( this.classes === '' )  {
      this.classes = this.className;
    } else if (this.parentInnerText !== this.childInnerText) {
      this.classes = this.className;
    } else if (this.parentInnerText === this.childInnerText) {
      this.classes = '';
    }
  }
}
