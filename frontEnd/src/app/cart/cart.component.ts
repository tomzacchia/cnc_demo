import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { Router } from '@angular/router';
import { MainProduct } from '../model/product.model';
import { Store } from '@ngrx/store';
import * as fromAppStore from '../appStore/appState.reducers';
import * as CartActions from './store/cart.actions';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit{

  resetScrollSubscription: Subscription;
  userItems: MainProduct[];
  storeSubscription: Subscription;
  userCost: cost = new cost(0,0,0);

  constructor(
    private spinnerService: SpinnerService,
    private router: Router,
    private store: Store< fromAppStore.AppState >,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.storeSubscription = this.store.select('cart').subscribe(
        (cartState) => {
          let userSelectedItems = cartState.cartItems;
          if( userSelectedItems.length === 0 ){
            this.userItems = this.localStorageService.getStateFromLocal();
            if ( this.userItems.length !== 0 ){
              this.store.dispatch(new CartActions.InitializeItems(this.userItems));
            }
          } else{
            this.userItems = userSelectedItems;
            this.userCost.calculateSubTotal(this.userItems);
          }
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

  // saves user items when refresh is detected
  @HostListener('window:beforeunload') saveState(){
    if (this.userItems !== []){
      this.localStorageService.saveStateLocally(this.userItems);
    }
  }
}

// class for calculating costs
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
