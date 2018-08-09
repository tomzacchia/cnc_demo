import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';
import { FilterService } from './filter.service';

@Directive({
  selector: '[appFilterSelected]'
})
export class FilterSelectedDirective {

  currentElRef: ElementRef;
  lastElRef: ElementRef;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private filterService: FilterService
  ) { }

  @HostListener('click', ['$event'] ) onClick(event:any){
    console.log(this.filterService.compareElRef(this.elRef));
    // console.log(event.target.dataset.category);
    // this.renderer.addClass( this.elRef.nativeElement, 'active');
  }

  elRefCheck(){
/*     if (this.lastElRef === undefined){
      this.lastElRef = this.currentElRef;
    }

    if ( this.currentElRef !== this.lastElRef ){
      console.log('last ' + this.lastElRef.nativeElement.innerText);
      this.lastElRef = this.currentElRef;
      console.log('last resetted ' + this.lastElRef.nativeElement.innerText);
    } else {
      console.log('nothing');
      console.log( this.lastElRef.nativeElement.innerText);
    } */
  }
}
