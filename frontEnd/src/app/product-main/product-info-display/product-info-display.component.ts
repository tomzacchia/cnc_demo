import { Component, OnInit } from '@angular/core';
import { ProductCardModalService } from '../product-card/product-modal.service';
import { Product } from '../../model/product.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsCatalogueService } from '../../services/items-catalogue.service';

@Component({
  selector: 'app-product-info-display',
  templateUrl: './product-info-display.component.html',
  styleUrls: ['./product-info-display.component.scss']
})
export class ProductInfoDisplayComponent implements OnInit {

  product: Product;
  
  constructor( 
    private productCardModal: ProductCardModalService, 
    public activeModal: NgbActiveModal,
    private itemsCatalogueService: ItemsCatalogueService
  ) { }

  ngOnInit() {
      this.product = this.productCardModal.getProduct();
  }

  itemAdded(){
    this.itemsCatalogueService.itemInitialAdd(this.product.id);
  }
}