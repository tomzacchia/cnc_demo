import { MainProduct } from '../model/product.model';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromAppState  from '../appStore/appState.reducers';
import * as CartActions from '../cart/store/cart.actions';

@Injectable()

export class ItemsCatalogueService{
    private itemsCatalogue: MainProduct[] = [];
    itemsCatalogueSubject = new Subject<MainProduct[]>();
    // Flag for add-to-cart display
    displayFlagEvent = new EventEmitter < {flag: boolean, id: string} > ();

    constructor(
      private store: Store< fromAppState.AppState >
    ){}

    // used by data storage service to save items from http request
    setItemsCatalogue( product: MainProduct[] ){
        this.itemsCatalogue = product;
        // Emit copy of items for rendering in product main page
        this.itemsCatalogueSubject.next([...this.itemsCatalogue]);
    }

    // Method to get copy of itemsCatalogue for product-main.component
    getItemsCatalogue(){
        return this.itemsCatalogue.slice();
    }

    // When item is initially added, we add to cart and update quantity
    itemInitialAdd(id: string){
        let item = this.itemsCatalogue.find(item => item.id == id);
        // item.quantity remains 0, while the item added to store has qty = 1
        const editedItem =  {...item, quantity: 1 }
        this.store.dispatch(new CartActions.AddItem(editedItem));
    }

}

