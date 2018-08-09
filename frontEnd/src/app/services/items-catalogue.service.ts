import { Product } from '../model/product.model';
import { Injectable } from '@angular/core';
import { UserCartService } from './user-cart.service';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class ItemsCatalogueService{

    itemsCatSubject = new Subject<Product[]>();
    quantityChangeEvent = new EventEmitter <Product>();
    // Flag for add-to-cart display
    displayFlagEvent = new EventEmitter < {flag: boolean, id: string} > ();

    private itemsCatalogue: Product[] = [];

    constructor( private userCartService: UserCartService ){}

    // storing to database practice
    getItems(){
        return this.itemsCatalogue;
    }

    // populate itemsCatalogue based on database response
    setItemsCatalogue( itemsCatalogue: Product[]){
        this.itemsCatalogue = itemsCatalogue.map(item => {
            return new Product(
                item.id,
                item.itemName,
                item.itemCost,
                item.specificCost,
                item.itemImg,
                item.quantity
            )
        });
        // Emit copy of data
        this.itemsCatSubject.next(this.itemsCatalogue.slice());

    }

    // Method to get copy of itemsCatalogue for product-main.component
    getItemsCatalogue(){
        return this.itemsCatalogue.slice();
    }

    // When item is initially added, we add to cart and update quantity
    itemInitialAdd(id: string){
        let item = this.itemsCatalogue.find(item => item.id == id);
        item.quantity++;
        this.quantityChangeEvent.emit(item);
        this.userCartService.addItem(item);
        this.displayFlagEvent.emit( { flag: true, id: item.id  } );
    }

    changeQuantity(changeType: string, id: string){
        let item = this.itemsCatalogue.find( item => item.id == id );

        //handling change type
        if (changeType === '-' ){
            if ( item.quantity === 1 ){
                // Removes increment-decrement button from display
                item.quantity--;
                this.removeItem(id);
                this.displayFlagEvent.emit( { flag: false, id: item.id  } );
            } else {
                item.quantity--;
            }   
        } else {
            item.quantity++;
        }
    }

    // changes item.quantity to 0 and removes from UserCart 
    removeItem(id: string){
        let item = this.itemsCatalogue.find( item => item.id == id );
        item.quantity = 0;
        this.userCartService.removeItem(id);
        this.displayFlagEvent.emit( { flag: false, id: item.id  } );
    }
    
}

    // = [
    //     new Product("asdf1" ,'Strawberries', 5.99, 5.99, 'https://goo.gl/kgmGVk', 0),
    //     new Product("asdf2", 'Premium Strawberries', 99, 9.9, 'https://goo.gl/kgmGVk', 0),
    //     new Product("asdf3", 'Apples', 5.99, 12, 'https://goo.gl/sf4iV3', 0),
    //     new Product('asdf4', 'Fucking Delicious Ice Cream', 4.99, 4.99, 'https://goo.gl/dQ3PZz', 0 )
    // ]