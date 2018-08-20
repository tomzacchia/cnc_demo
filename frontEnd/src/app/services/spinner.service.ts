import { Subject } from "rxjs";

export class SpinnerService{
    spinnerDisplay = new Subject<boolean>();
    spinnerOn(){
        this.spinnerDisplay.next(true);
    }
    spinnerOff(){
        this.spinnerDisplay.next(false);
    }
}