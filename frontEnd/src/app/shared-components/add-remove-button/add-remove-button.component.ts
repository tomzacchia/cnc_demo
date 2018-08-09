import { Component, OnInit, Input } from '@angular/core';

//Models
import { Product } from '../../model/product.model';
import { ItemsCatalogueService } from '../../services/items-catalogue.service';
@Component({
  selector: 'app-add-remove-button',
  templateUrl: './add-remove-button.component.html',
  styleUrls: ['./add-remove-button.component.scss']
})
export class AddRemoveButtonComponent implements OnInit {

  @Input() item: Product;

  constructor( 
      private itemsCatalogueService: ItemsCatalogueService) { }

  ngOnInit() {

  }
 
  changeQuantity(event: any){
    let changeType = event.target.innerText;
    this.itemsCatalogueService.changeQuantity(changeType, this.item.id);
  }
    
}
