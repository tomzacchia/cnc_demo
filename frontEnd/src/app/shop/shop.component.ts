import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ShopService } from '../services/shop.service';

import { ShopInfoModel } from '../model/shop.model';
import { DataStorageService } from '../services/data-storage.service';
import { ResetScrollService } from '../services/reset-scroll.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {

  shopsArray: ShopInfoModel[] = [];
  @ViewChild('shopContainer') shopContainer: ElementRef<any>;

  constructor(
    private shopService: ShopService, 
    private dataStorageService: DataStorageService,
    private resetScrollService: ResetScrollService,
  ) { }

  ngOnInit() {
    this.shopsArray = this.shopService.shopsArray;
    this.resetScrollService.setScrollTop();
  }

  onSearchSubmit(form:any){
    console.log(form.search);
  } 

  ngOnDestroy(){
    // this.dataStorageService.getItemsCatalogue();
    // console.log('destroyed called');
  }
}
