import { Component, 
         AfterViewInit
} from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { PaymentCard } from '../../model/payment-card.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements AfterViewInit {

  months: number[] = [];
  years: number[] = []
  monthSelected: number = null;
  yearSelected: number = null;
  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.spinnerService.spinnerOff();
    })
    for (let i = 0; i < 12; i++){
      this.months.push(i + 1);
      this.years.push(2018 + i);
    }
  }

  paymentFormData(form: any){
    console.log(form.valid);
    let paymentCard = new PaymentCard(
      form.value.name,
      form.value.cardNumber,
      this.monthSelected,
      this.yearSelected
    )
    console.log(paymentCard)
  }

  buttonStatus(form){
    if(form.valid && this.monthSelected!== null && this.yearSelected!== null ){
      return false;
    } else{
      true;
    }
  }
}
