import { Injectable } from "@angular/core";
import { ItemsCatalogueService } from "./items-catalogue.service";

import { Http, Response } from '@angular/http';
import { Product } from "../model/product.model";

@Injectable()

export class DataStorageService{

    constructor( 
        private itemsCatalogueService: ItemsCatalogueService, 
        private http: Http
    ){ };

    overrideData(){
        return this.http.put(
            'https://click-collect-practice.firebaseio.com/practice-data.json',
            this.itemsCatalogueService.getItems()
        );
    }

    getItemsCatalogue(){
        this.http.get(
            'https://click-collect-practice.firebaseio.com/practice-data.json'
        ).subscribe(
            (response: Response) =>{
                const product: Product[] = response.json();
                // storing items in items catalogue service
                this.itemsCatalogueService.setItemsCatalogue(product);
            },
            (error: Response) => console.log ('Error') 
        );
    }
}