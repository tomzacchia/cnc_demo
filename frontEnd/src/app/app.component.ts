import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationError } from '@angular/router';
import { SpinnerService } from './services/spinner.service';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  spinnerDisplay = false;
  spinnerSubscription: Subscription =
    this.spinnerService.spinnerDisplay.subscribe(
      spinnerFlag => {
        this.spinnerDisplay = spinnerFlag;
      }
    )

  constructor(
    private router: Router,
    private spinnerService: SpinnerService
  ){}

  ngOnInit(){
    // initialzing firebase
    firebase.initializeApp({
      apiKey: "AIzaSyDmlYrzFrW9MVRtXiu2iVjtJoO3B6icZLc",
      authDomain: "click-collect-practice.firebaseapp.com",
    })

    this.router.events.subscribe(
      (event: Event) => {
        if ( event instanceof NavigationStart ) {
          this.spinnerService.spinnerOn()
        } else if ( event instanceof NavigationError ){
          console.log(event.error);
        }
      }
    )
  }

}
