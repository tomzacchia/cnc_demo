import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CreateNewItemComponent } from '../../product-main/create-new-item/create-new-item.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalType: string;

  constructor(private modalService: NgbModal) {}

  open() {

    switch(this.modalType){
      case "newItemForm":
        this.modalService.open(CreateNewItemComponent);
        break;
    }
    
  }

  ngOnInit(){

  }

}
