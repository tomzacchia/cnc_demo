import { NgModule } from "@angular/core";
import { BlankModalComponent } from "./blank-modal/blank-modal.component";
import { ModalComponent } from "./modal/modal.component";
import { FooterComponent } from "./footer/footer.component";
import { AddRemoveButtonComponent } from "./add-remove-button/add-remove-button.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        BlankModalComponent,
        ModalComponent,
        FooterComponent,
        AddRemoveButtonComponent
    ],
    exports: [
        BlankModalComponent,
        ModalComponent,
        FooterComponent,
        AddRemoveButtonComponent
    ]
})

export class SharedComponentsModule {}
