import { NgModule } from "../../../node_modules/@angular/core";
import { MainNavComponent } from "./main-nav.component";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "../../../node_modules/@angular/common";
import { 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatIconModule, 
    MatButtonModule 
} from "../../../node_modules/@angular/material";

import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [
        MainNavComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        AppRoutingModule,
    ],
    exports:[
        MainNavComponent
    ]
})

export class MainNavModule { }