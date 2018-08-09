import { Component, 
         OnInit, 
         Input,
         ViewChild,
        ElementRef } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @ViewChild('visa') visa: ElementRef;

  cardSelected: boolean;

  constructor() {
    this.cardSelected = false;
   }

  ngOnInit() {
  }

  cardClicked(event:any){
    this.cardSelected = true;
    console.log(this.visa);
    
  }
}
