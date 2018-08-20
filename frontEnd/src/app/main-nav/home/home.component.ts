import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
    selector: 'cnc-main-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

    constructor( private spinnerService: SpinnerService) {}

    ngOnInit() {}

    ngAfterViewInit(){
        setTimeout(()=>{
          this.spinnerService.spinnerOff();
        })
    }

    ngOnDestroy(){
        console.log('home destroyed');
    }
}
