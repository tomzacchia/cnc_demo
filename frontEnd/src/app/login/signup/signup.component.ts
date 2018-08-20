import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    setTimeout( ()=>  this.spinnerService.spinnerOff() );
  }

  onSignUp(formData){
    console.log(formData.value);
  }
}
