import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//Services
import { accountService } from '../../services/account.service';
import { ProductCardModalService } from './product-modal.service';
//models
import { Product } from '../../model/product.model';
//Components
import { ProductInfoDisplayComponent } from '../product-info-display/product-info-display.component';
import { ItemsCatalogueService } from '../../services/items-catalogue.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  user: boolean;
  addButtonDisplay: boolean;
  @Input() item: Product;
  @Input() itemIndex: number;

  constructor( 
    private accountService: accountService, 
    private modalService: NgbModal, 
    private productCardModal: ProductCardModalService, 
    private itemsCatalogueService: ItemsCatalogueService) { }

  ngOnInit() {
      this.user = this.accountService.user;
      this.addButtonDisplay = this.item.quantity != 0;
      // Event subscription
      this.itemsCatalogueService.quantityChangeEvent.subscribe(
        (item: Product) =>{
          // prevents updating all items to the changed item
          if( item.id === this.item.id ){
            this.item = item;
          }
        }
      )
      this.itemsCatalogueService.displayFlagEvent.subscribe(
        ({ flag, id}) =>{
          if( id === this.item.id ){
            this.addButtonDisplay = flag;
          }
        }
      )
  }
    
  itemAdded(){
      this.addButtonDisplay = !this.addButtonDisplay;
      // this.userCartService.addItem(this.item);
      this.itemsCatalogueService.itemInitialAdd(this.item.id);
  }    
   
  updateButtonDisplay(event:any){
      this.addButtonDisplay = event;
  }

  openModal(){
    //item loaded in service and then fetched by info display component
    this.productCardModal.loadProduct(this.item);
    this.modalService.open(ProductInfoDisplayComponent, { size: 'lg' });
  }
  
}
