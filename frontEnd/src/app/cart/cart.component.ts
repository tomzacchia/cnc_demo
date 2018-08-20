import { Component, OnInit, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { UserCartService  } from '../services/user-cart.service';
import { Product } from '../model/product.model';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { ItemsCatalogueService } from '../services/items-catalogue.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit, OnDestroy{

  resetScrollSubscription: Subscription;
  userItemsArray: Product[] =[];
  userCost: cost = new cost(0,0,0);

  userItemsServiceSubscription: Subscription = this.userCartService.productSubject.subscribe(
    (products: Product[]) =>{
      this.userItemsArray = products;
      this.calculateCost()
    }
  )

  constructor(
    private userCartService: UserCartService,
    private spinnerService: SpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userCartService.getUserItems();
  }

  navigateTo(){
    let currentUrl = this.router.url;
    this.router.navigate( [currentUrl, 'payment'] )
  }

  calculateCost(){
    this.userItemsArray.forEach(
      product => {
        this.userCost.subtotal = this.userCost.subtotal +
          (product.itemCost * product.quantity);
        console.log(this.userCost.subtotal);
      }
    )
    this.userCost.subtotal = Number(this.userCost.subtotal.toFixed(2))
    this.userCost.taxes = Number( (this.userCost.subtotal * 0.15).toFixed(2) );
    this.userCost.total = Number( (this.userCost.subtotal + this.userCost.taxes).toFixed(2) );
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.spinnerService.spinnerOff();
    })
  }

  ngOnDestroy(){
    this.userItemsServiceSubscription.unsubscribe();
  }

}

class cost {
    constructor(
      public subtotal: number,
      public taxes: number,
      public total: number
    ){}
}
