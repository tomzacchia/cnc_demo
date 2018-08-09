import { NgModule } from "../../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../../node_modules/@angular/router";
import { ShopComponent } from "./shop.component";

const shopRoutes: Routes = [
    {path: '', component: ShopComponent }
]

@NgModule({
    imports: [ RouterModule.forChild(shopRoutes) ],
    exports: [ RouterModule ] 
})

export class ShopRoutingModule { }