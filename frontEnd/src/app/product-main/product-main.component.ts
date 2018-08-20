import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ItemsCatalogueService } from '../services/items-catalogue.service';
import { CreateNewItemComponent } from './create-new-item/create-new-item.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Model
import { Product } from '../model/product.model';
import { DataStorageService } from '../services/data-storage.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '../../../node_modules/@angular/router';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit, OnDestroy, AfterViewInit {

  itemsCatalogue: Product[]= [];
  private itemsCatSubscription: Subscription = this.itemsCatalogueService.itemsCatSubject
    .subscribe(
      (itemsCatalogue: Product[]) =>{
        this.itemsCatalogue = itemsCatalogue;
      }
    )
  newItemForm = 'newItemForm';
  private categorySelected: string;

  constructor( 
      private itemsCatalogueService: ItemsCatalogueService, 
      private modalService: NgbModal,
      private dataStorageService: DataStorageService,
      private route: ActivatedRoute,
      private router: Router,
      private spinnerService: SpinnerService
  ) { };

  ngOnInit() {
    this.getQueryData();
    if( this.itemsCatalogueService.httpRequestFlag ){
      this.getItems();
    } else{
      this.itemsCatalogue = this.itemsCatalogueService.getItemsCatalogue();
    }
  }

  // get items from database and fill itemsCatalogue in its service
  getItems(){
    this.dataStorageService.getItemsCatalogue();
  }

  // opens modal
  openFormModal() {
    this.modalService.open(CreateNewItemComponent, {size: 'lg', centered: true});
  }

  // go up one level w.r.t current route
  onNavigateBack(){
    this.router.navigate(
      ['../'],
      { relativeTo: this.route }
    )
  }

  // get data from URL
  getQueryData(){
    this.route.params.
      subscribe(
        (params: Params) =>{
          this.categorySelected = params['id'];
          console.log(this.categorySelected);
        }
      )
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.spinnerService.spinnerOff();
    })
  }

  ngOnDestroy(){
    this.itemsCatSubscription.unsubscribe();
  }

  
}