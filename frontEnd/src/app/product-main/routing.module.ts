import { Routes, RouterModule } from "../../../node_modules/@angular/router";
import { NgModule } from "../../../node_modules/@angular/core";
import { ProductMainComponent } from "./product-main.component";
import { ProductIntroComponent } from "./product-intro/product-intro.component";


const routes: Routes = [
    { path: '', component: ProductIntroComponent},
    { path: ':id', component: ProductMainComponent}
]

@NgModule({
    imports: [ RouterModule.forChild(routes)] ,
    exports: [ RouterModule ]
})

export class ProductMainRoutingModule { }