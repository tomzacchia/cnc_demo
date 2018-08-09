import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ShopInfoModel } from '../../model/shop.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {
 
  @ViewChild('storeHours') storeHours: ElementRef;
  // storeHours: boolean;

  @Input() shopInfo: ShopInfoModel;

  constructor( private modalService: NgbModal) {
    // this.storeHours = false;
   }

  ngOnInit() {
  }

  // storeDetailsState(){
  //   this.storeHours = (this.storeHours === false  ? true : false) ;
  // }  

  // storeDetailModal(){
  //   this.modalService.open(this.storeHours);
  // }
}
