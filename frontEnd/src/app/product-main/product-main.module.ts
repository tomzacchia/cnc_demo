import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedComponentsModule } from "../shared-components/shared-component.module";
import {
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
} from "../../../node_modules/@angular/material";
import { ProductMainRoutingModule } from "./routing.module";

// Components
import { ProductMainComponent } from "./product-main.component";
import { SortFilterComponent } from "./sort-filter/sort-filter.component";
import { ProductNavComponent } from "./product-nav/product-nav.component";
import { ProductIntroComponent } from "./product-intro/product-intro.component";
import { ProductInfoDisplayComponent } from "./product-info-display/product-info-display.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { CreateNewItemComponent } from "./create-new-item/create-new-item.component";

@NgModule({
    declarations:[
        CreateNewItemComponent,
        ProductMainComponent,
        SortFilterComponent,
        ProductNavComponent,
        ProductIntroComponent,
        ProductInfoDisplayComponent,
        ProductCardComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        SharedComponentsModule,
        ProductMainRoutingModule
    ],
})
export class ProductMainModule{ }
