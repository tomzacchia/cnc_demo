import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blank-modal',
  templateUrl: './blank-modal.component.html',
  styleUrls: ['./blank-modal.component.scss']
})
export class BlankModalComponent implements OnInit {

  @Input() modalContent: ElementRef;

  constructor( private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(){
    this.modalService.open(this.modalContent, {centered: true});
  }

}
