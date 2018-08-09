import { ElementRef } from "@angular/core";

export class FilterService{

    elRefs: ElementRef[] =[];

    addElRef(elRef: ElementRef){
        this.elRefs.push(elRef);
        console.log(this.elRefs);
    }

    // checking if duplicates in elRefs exists
    compareElRef(elRef: ElementRef){
        if(this.elRefs === []){
            this.addElRef(elRef);
            return true;
        } else {
            this.elRefs.find(
                (elRefElement) => {
                    if(elRefElement === elRef){
                        return false;
                    } else {
                        this.addElRef(elRef);
                        return true;
                    }
                }    
            )
        }
    }


}