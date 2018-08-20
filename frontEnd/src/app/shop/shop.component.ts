import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

import { ShopInfoModel } from '../model/shop.model';
import { ResetScrollService } from '../services/reset-scroll.service';
import { SpinnerService } from '../services/spinner.service';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy, AfterContentInit {

  shopsArray: ShopInfoModel[] = [];
  @ViewChild('shopContainer') shopContainer: ElementRef<any>;

  constructor(
    private shopService: ShopService, 
    private resetScrollService: ResetScrollService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.shopsArray = this.shopService.shopsArray;
    this.resetScrollService.setScrollTop();
  }

  onSearchSubmit(form:any){
    console.log(form.search);
  } 

  ngAfterContentInit(){
    setTimeout(()=>{
      this.spinnerService.spinnerOff();
    })
  }
  ngOnDestroy(){
    // this.dataStorageService.getItemsCatalogue();
    // console.log('destroyed called');
  }
}
