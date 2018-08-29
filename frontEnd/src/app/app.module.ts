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
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardModalService } from './product-main/product-card/product-modal.service';
import { DataStorageService } from './services/data-storage.service';
import { ResetScrollService } from './services/reset-scroll.service';
import { SpinnerService } from './services/spinner.service';
import { MainHttpService } from './admin/http.service';
// Custom Directive
import { highlightDirective } from './cart/payment/highlight.directive';
import { FilterSelectedDirective } from './product-main/sort-filter/filter-selected.directive';
import { AnimateDirectiveDirective } from './product-main/sort-filter/animate-directive.directive';
// Components
import { AppComponent } from './app.component';
import { MainComponent } from './admin/main/main.component';

// Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Angular Materials
import { LayoutModule } from '@angular/cdk/layout';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatProgressSpinnerModule,
  } from '@angular/material';
// Modules
import { HttpModule } from '@angular/http';
import { SharedComponentsModule } from './shared-components/shared-component.module';
// for Modal display
import { CreateNewItemComponent } from './product-main/create-new-item/create-new-item.component';
import { ProductInfoDisplayComponent } from './product-main/product-info-display/product-info-display.component';
// Eagerly loaded UI modules
import { MainNavModule } from './main-nav/main-nav.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { StoreModule } from '@ngrx/store';
// State reducers
import { reducers } from './appStore/appState.reducers';

@NgModule({
  declarations: [
    AppComponent,
    highlightDirective,
    AnimateDirectiveDirective,
    FilterSelectedDirective,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    SharedComponentsModule,
    NgbModule.forRoot(),
    LayoutModule,
    BrowserAnimationsModule,
    MainNavModule,
    LoginModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers),
    AppRoutingModule,

  ],
  providers: [
    accountService,
    ItemsCatalogueService,
    ShopService,
    NgbActiveModal,
    ProductCardModalService,
    DataStorageService,
    ResetScrollService,
    SpinnerService,
    MainHttpService,
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
