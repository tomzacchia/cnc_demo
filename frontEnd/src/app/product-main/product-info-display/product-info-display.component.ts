import { Component, OnInit } from '@angular/core';
import { ProductCardModalService } from '../product-card/product-modal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsCatalogueService } from '../../services/items-catalogue.service';
import { MainProduct } from '../../admin/product.model';

@Component({
  selector: 'app-product-info-display',
  templateUrl: './product-info-display.component.html',
  styleUrls: ['./product-info-display.component.scss']
})
export class ProductInfoDisplayComponent implements OnInit {

  product: MainProduct;

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
