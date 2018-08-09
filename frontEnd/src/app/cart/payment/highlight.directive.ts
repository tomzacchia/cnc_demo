import{
    Directive,
    HostListener,
    HostBinding,
    ElementRef
} from '@angular/core';

@Directive({
    selector: '[highlightDirective]'
})

export class highlightDirective {
    color: string;
    @HostBinding('style.backgroundColor') bgColor: string;

    constructor(private elRef: ElementRef){
        this.color = '#5cb85c';
        this.bgColor = 'transparent';
    }

    @HostListener('document:click', ['$event'])
    public onDocumentClick(event: MouseEvent): void {
      const targetElement = event.target;
        // Check if the click was outside the element
        if (targetElement && !this.elRef.nativeElement.contains(targetElement)) {
            this.bgColor = 'transparent';
        } else{
            this.bgColor = this.color;
        }
    }

} 