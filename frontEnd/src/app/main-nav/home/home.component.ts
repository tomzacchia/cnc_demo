import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'cnc-main-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor() {}

    ngOnInit() {}

    ngOnDestroy(){
        console.log('home destroyed');
    }
}
