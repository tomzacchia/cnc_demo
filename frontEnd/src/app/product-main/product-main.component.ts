import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsCatalogueService } from '../services/items-catalogue.service';
import { UserCartService } from '../services/user-cart.service';
import { CreateNewItemComponent } from './create-new-item/create-new-item.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Model
import { Product } from '../model/product.model';
import { DataStorageService } from '../services/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit, OnDestroy {

  itemsCatalogue: any= [];
  private itemsCatSubscription: Subscription;
  newItemForm = 'newItemForm';
  spinnerDisplay = false;

  constructor( 
      private itemsCatalogueService: ItemsCatalogueService, 
      private userCartService: UserCartService, 
      private modalService: NgbModal,
      private dataStorageService: DataStorageService
  ) { };

  // get items from database and populate itemsCatalogue in its service
  getItems(){
    this.dataStorageService.getItemsCatalogue();
  }

  ngOnInit() {
    this.getItems();
    // Subscribe to change in items catalogue
    this.itemsCatSubscription = this.itemsCatalogueService.itemsCatSubject
      .subscribe(
        (itemsCatalogue: Product[]) =>{
          this.itemsCatalogue = itemsCatalogue;

          // Simulating buffering icon 
          setTimeout( ()=>{
            console.log('pause end');
            this.spinnerDisplay = false;
          } ,3000);
        }
      )
  }

  openFormModal() {
    this.modalService.open(CreateNewItemComponent, {size: 'lg', centered: true});
  }

  ngOnDestroy(){
    this.itemsCatSubscription.unsubscribe();
    console.log('destroyed');
  }
}