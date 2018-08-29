import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MainProduct } from '../../model/product.model';

@Component({
  selector: 'app-create-new-item',
  templateUrl: './create-new-item.component.html',
  styleUrls: ['./create-new-item.component.scss']
})
export class CreateNewItemComponent implements OnInit {

//   @ViewChild('newItemForm') newItemForm: NgForm;

  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  // function will save form data, reset field and close modal
  formData(form: any){
      //console.log(form.value);
      let formVal = form.value;

      // let newProduct = new MainProduct(
      //     'asdf2',
      //     formVal.itemName,
      //     formVal.cost.itemCost,
      //     formVal.cost.itemSpecificCost,
      //     'https://goo.gl/kgmGVk', // strawberries
      //     0
      // );
      //console.log(newProduct);

      // save data either to local storage or server here


      form.reset();
      this.activeModal.close();
  }


}
