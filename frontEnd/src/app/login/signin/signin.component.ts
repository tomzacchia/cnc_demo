import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { AuthService } from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private spinnerService: SpinnerService,
    private authService: AuthService
  ) { }


  ngOnInit() {
    setTimeout( ()=>  this.spinnerService.spinnerOff() );
  }

  onSignIn(formData){
    const email = formData.value.email;
    const password = formData.value.password;
    this.authService.signInUser(email, password)
  }
}
