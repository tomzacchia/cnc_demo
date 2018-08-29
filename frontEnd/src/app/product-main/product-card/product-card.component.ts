import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//Services
import { accountService } from '../../services/account.service';
import { ProductCardModalService } from './product-modal.service';
//models
import { MainProduct } from '../../model/product.model';
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
  @Input() item: MainProduct;

  constructor(
    private accountService: accountService,
    private modalService: NgbModal,
    private productCardModal: ProductCardModalService,
    private itemsCatalogueService: ItemsCatalogueService) { }

  ngOnInit() {
      // this.user = this.accountService.user;
  }

  itemAdded(){
    this.itemsCatalogueService.itemInitialAdd(this.item.id);
  }

  openModal(){
    //item loaded in service and then fetched by info display component
    this.productCardModal.loadProduct(this.item);
    this.modalService.open(ProductInfoDisplayComponent, { size: 'lg' });
  }

}
