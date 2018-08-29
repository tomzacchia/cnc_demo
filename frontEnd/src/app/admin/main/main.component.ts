import { Component, OnInit } from '@angular/core';
import { MainHttpService } from '../http.service';
import { SpinnerService } from '../../services/spinner.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private mainHttpService: MainHttpService,
    private spinnerService: SpinnerService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.spinnerService.spinnerOff();
    })
  }

  onPost(){
    // this.mainHttpService.sendData();
  }

  // saveData(){
  //   this.localStorageService.saveState();
  // }

  // getData(){
  //   this.localStorageService.getState();
  // }

}
