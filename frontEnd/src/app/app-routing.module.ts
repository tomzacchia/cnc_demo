import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './main-nav/home/home.component';
import { NgModule } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: 'cart',
        loadChildren: './cart/cart.module#CartModule'},
    {
        path: 'view-stores',
        loadChildren: './shop/shop.module#ShopModule'}, 
    {
        path: 'productPage', 
        loadChildren: './product-main/product-main.module#ProductMainModule'
    },
    {path: '', redirectTo: 'home', pathMatch: 'full'} 
];

@NgModule({
    imports: [ RouterModule.forRoot( APP_ROUTES ) ],
    exports: [ RouterModule]
})
export class AppRoutingModule { }