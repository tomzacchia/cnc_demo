import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { UserCartService  } from '../services/user-cart.service';
import { Product } from '../model/product.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  resetScrollSubscription: Subscription;
  userItemsArray: Product[] = [];

  constructor( 
    private userCartService: UserCartService, 
  ) {}

  ngOnInit() {

    this.userItemsArray =  this.userCartService.getUserItems();

  }

}
