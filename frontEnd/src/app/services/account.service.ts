import { Injectable } from '@angular/core';

@Injectable()

export class accountService{
    //Properties for ngIf directive
    user : boolean = true;
    vendor : boolean = false;
    signedIn: boolean = true;

    constructor(){
        
    }
}