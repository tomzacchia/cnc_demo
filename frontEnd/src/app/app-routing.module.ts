import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './main-nav/home/home.component';
import { NgModule } from '@angular/core';
import { MainComponent } from './admin/main/main.component';
import { SigninComponent } from './login/signin/signin.component';
import { LoginMainComponent } from './login/login-main/login-main.component';
import { CartComponent } from './cart/cart.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path:'log-in', loadChildren: './login/login.module#LoginModule' },
    { path: 'admin', component: MainComponent },
    { path: 'cart', component: CartComponent },
    // {
    //     path: 'cart',
    //     loadChildren: './cart/cart.module#CartModule'
    // },
    {
        path: 'view-stores',
        loadChildren: './shop/shop.module#ShopModule'
    },
    {
        path: 'productPage',
        loadChildren: './product-main/product-main.module#ProductMainModule'
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo:'/home' }
];

@NgModule({
    imports: [ RouterModule.forRoot( APP_ROUTES ) ],
    exports: [ RouterModule]
})
export class AppRoutingModule { }
