import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';

//Services
import { UserCartService } from '../../services/user-cart.service';
import { ItemsCatalogueService } from '../../services/items-catalogue.service';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.scss']
})
export class CheckoutProductComponent implements OnInit {

   @Input() item: Product;
   addButtonDisplay = true ;

  constructor( private userCartService: UserCartService, private itemsCatalogueService: ItemsCatalogueService) { }

  ngOnInit() {
    if ( this.item.quantity === 0 ){
      this.addButtonDisplay = false;
    }
    this.itemsCatalogueService.displayFlagEvent.subscribe(
      ({ flag, id}) =>{
        if( id === this.item.id ){
          this.addButtonDisplay = flag;
        }
      }
    )
  }

  removeItem(){
    this.itemsCatalogueService.removeItem(this.item.id);
  }
}
