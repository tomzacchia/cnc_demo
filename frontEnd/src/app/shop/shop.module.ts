import { NgModule } from "../../../node_modules/@angular/core";
import { ShopComponent } from "./shop.component";
import { StoreCardComponent } from "./store-card/store-card.component";
import { CommonModule } from "../../../node_modules/@angular/common";
import { FormsModule } from "../../../node_modules/@angular/forms";
import { ShopRoutingModule } from "./shop-routing.module";
import { SharedComponentsModule } from "../shared-components/shared-component.module";

@NgModule({
    declarations: [
        ShopComponent,
        StoreCardComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentsModule,
        ShopRoutingModule
    ]
})
export class ShopModule {}