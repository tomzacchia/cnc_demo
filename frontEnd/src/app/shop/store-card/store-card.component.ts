import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ShopInfoModel } from '../../model/shop.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {

  @ViewChild('storeHours') storeHours: ElementRef;
  // storeHours: boolean;

  @Input() shopInfo: ShopInfoModel;

  constructor( private router: Router ) {
   }

  ngOnInit() {
  }

  onNavigate(){
    this.router.navigate( ['/productPage'] );
  }
}
