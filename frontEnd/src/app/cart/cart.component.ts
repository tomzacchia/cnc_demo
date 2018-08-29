import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { Router } from '@angular/router';
import { MainProduct } from '../model/product.model';
import { Store } from '@ngrx/store';
import * as fromAppStore from '../appStore/appState.reducers';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit{

  resetScrollSubscription: Subscription;
  userItemsArray: MainProduct[] = [];
  storeSubscription: Subscription;
  userCost: cost = new cost(0,0,0);

  constructor(
    private spinnerService: SpinnerService,
    private router: Router,
    private store: Store< fromAppStore.AppState >,
  ) {}

  ngOnInit() {
    this.storeSubscription = this.store.select('cart').subscribe(
        (cartState) => {
          let userSelectedItems = cartState.cartItems;
          this.userItemsArray = userSelectedItems;
          this.userCost.calculateSubTotal(this.userItemsArray);
        },
        error => console.log(error)
      )
  }

  navigateTo(){
    let currentUrl = this.router.url;
    this.router.navigate( [currentUrl, 'payment'] )
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.spinnerService.spinnerOff();
    })
  }

}

class cost {
  constructor(
    public subTotal: number,
    public taxes: number,
    public total: number
  ){}

  calculateSubTotal(userItems: MainProduct[]){
    let subTotal = 0;
    userItems.forEach( item =>{
      subTotal = subTotal + (item.quantity*item.cost.itemCost);
    })
    this.subTotal = Math.round(subTotal * 100)/100;

    this.calculateTax();
    this.calculateTotal();
  }

  calculateTax(){
    let taxes = this.subTotal * (0.15);
    this.taxes = Math.round(taxes * 100)/100;
  }

  calculateTotal(){
    this.total = Math.round( (this.subTotal + this.taxes)*100 )/100;
  }
}
