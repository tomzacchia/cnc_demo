import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutProductComponent } from './checkout-product/checkout-product.component';
import { SharedComponentsModule } from '../shared-components/shared-component.module';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartComponent,
    PaymentComponent,
    CheckoutProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    CartRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})

export class CartModule { }
