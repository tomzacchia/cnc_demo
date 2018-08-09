import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Services
import { accountService  } from './services/account.service';
import { ItemsCatalogueService } from './services/items-catalogue.service';
import { ShopService } from './services/shop.service';
import { UserCartService }  from './services/user-cart.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardModalService } from './product-main/product-card/product-modal.service';
import { DataStorageService } from './services/data-storage.service';
import { ResetScrollService } from './services/reset-scroll.service';
// Custom Directive
import { highlightDirective } from './cart/payment/highlight.directive';
import { FilterSelectedDirective } from './product-main/sort-filter/filter-selected.directive';
import { AnimateDirectiveDirective } from './product-main/sort-filter/animate-directive.directive';
// Components
import { AppComponent } from './app.component';
import { ProductInfoDisplayComponent } from './product-main/product-info-display/product-info-display.component';

// Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Angular Materials
import { LayoutModule } from '@angular/cdk/layout';
import { 
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  } from '@angular/material';

// Modules
import { HttpModule } from '@angular/http';
import { SharedComponentsModule } from './shared-components/shared-component.module';
import { MainNavModule } from './main-nav/main-nav.module';

import { CreateNewItemComponent } from './product-main/create-new-item/create-new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    highlightDirective,
    AnimateDirectiveDirective,
    FilterSelectedDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    SharedComponentsModule,
    NgbModule.forRoot(),
    LayoutModule,
    BrowserAnimationsModule,
    HttpModule, 
    MainNavModule,
    AppRoutingModule
  ],
  providers: [ 
    accountService, 
    ItemsCatalogueService, 
    ShopService,
    UserCartService,
    NgbActiveModal,
    ProductCardModalService,
    DataStorageService,
    ResetScrollService,
    // for Mat forms, highlighting error only when dirty
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent],
  // For Modal to load content
  entryComponents: [
    CreateNewItemComponent,
    ProductInfoDisplayComponent
  ],
})
export class AppModule { }
