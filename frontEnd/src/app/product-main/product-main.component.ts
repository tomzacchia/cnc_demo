import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ItemsCatalogueService } from '../services/items-catalogue.service';
import { CreateNewItemComponent } from './create-new-item/create-new-item.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Model
import { MainProduct } from '../model/product.model';
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

  itemsCatalogue: MainProduct[]= [];
  private itemsCatSubscription: Subscription = this.itemsCatalogueService.itemsCatalogueSubject
    .subscribe(
      (itemsCatalogue: MainProduct[]) =>{
        this.itemsCatalogue = itemsCatalogue;
      }
    )
  private categorySelected: string;

  constructor(
      private itemsCatalogueService: ItemsCatalogueService,
      private modalService: NgbModal,
      private dataStorageService: DataStorageService,
      private route: ActivatedRoute,
      private router: Router,
      private spinnerService: SpinnerService,
  ) { };

  ngOnInit() {
    this.getQueryData();
    this.getItems();
  }

  // get items from database and fill itemsCatalogue in its service
  getItems(){
    this.dataStorageService.getItemsCatalogue(this.categorySelected);
  }

  // opens modal
  openFormModal() {
    this.modalService.open(CreateNewItemComponent, {size: 'lg', centered: true});
  }

  // get data from URL
  getQueryData(){
    this.route.params.
      subscribe(
        (params: Params) =>{
          this.categorySelected = params['id'];
        }
      )
  }

  // go up one level w.r.t current route
  onNavigateBack(){
    this.router.navigate(
      ['../'],
      { relativeTo: this.route }
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
