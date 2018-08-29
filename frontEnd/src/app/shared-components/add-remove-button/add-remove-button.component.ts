import { Component, OnInit, Input } from '@angular/core';

//Models
import { MainProduct } from '../../model/product.model';
import { ItemsCatalogueService } from '../../services/items-catalogue.service';

import { Store } from '@ngrx/store';
import * as fromAppState from '../../appStore/appState.reducers';
import * as cartActions from '../../cart/store/cart.actions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-remove-button',
  templateUrl: './add-remove-button.component.html',
  styleUrls: ['./add-remove-button.component.scss']
})
export class AddRemoveButtonComponent implements OnInit {

  @Input() itemId: string;
  public item: MainProduct = null;
  private storeSubcription: Subscription;
  public addButtonDisplay: boolean = false;

  constructor(
      private itemsCatalogueService: ItemsCatalogueService,
      private store: Store < fromAppState.AppState >
    ) { }

  ngOnInit() {
    this.storeSubcription = this.store.select('cart')
    .subscribe(
      (cartItems) => {
        let userSelectedItems = cartItems.cartItems;
        let desiredItem = userSelectedItems.find(
          item => { return item.id === this.itemId }
        )
        if ( !(desiredItem === undefined) ){
          this.item = {...desiredItem};
          if (this.item.quantity !== 0) this.addButtonDisplay = true;
        }
      }
    )

  }

  itemAdded(){
    this.itemsCatalogueService.itemInitialAdd(this.itemId);
  }

  onDecrement(){
    if (this.item.quantity === 1){
      this.store.dispatch(new cartActions.DeleteItem(this.itemId));
      this.addButtonDisplay = false;
    } else {
      this.store.dispatch( new cartActions.DecrementQty(this.itemId));
    }
  }

  onIncrement(){
    this.store.dispatch( new cartActions.IncrementQty(this.itemId));
  }

}
