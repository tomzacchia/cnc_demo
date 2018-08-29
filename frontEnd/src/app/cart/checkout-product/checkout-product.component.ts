import { Component, OnInit, Input } from '@angular/core';
import { MainProduct } from '../../model/product.model';

import { Store } from '@ngrx/store';
import * as fromAppStore from '../../appStore/appState.reducers';
import * as cartActions from '../store/cart.actions';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.scss']
})
export class CheckoutProductComponent implements OnInit {

   @Input() item: MainProduct;

  constructor( private store: Store< fromAppStore.AppState > ) { }

  ngOnInit() { }

  removeItem(){
    this.store.dispatch( new cartActions.DeleteItem(this.item.id));
  }
}
