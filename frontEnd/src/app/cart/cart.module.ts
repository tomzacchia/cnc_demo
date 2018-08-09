import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutProductComponent } from './checkout-product/checkout-product.component';
import { SharedComponentsModule } from '../shared-components/shared-component.module';

@NgModule({
  declarations: [
    CartComponent,
    PaymentComponent,
    CheckoutProductComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    CartRoutingModule
  ],
})

export class CartModule { }
