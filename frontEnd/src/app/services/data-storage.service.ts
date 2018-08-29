import { Injectable } from "@angular/core";
import { ItemsCatalogueService } from "./items-catalogue.service";
import { MainProduct } from "../model/product.model";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import * as fromAppState from '../appStore/appState.reducers';

@Injectable()

export class DataStorageService{

    constructor(
        private itemsCatalogueService: ItemsCatalogueService,
        private http: HttpClient,
        private store: Store< fromAppState.AppState >
    ){ };

    // overrideData(){
    //     return this.http.put(
    //         'https://click-collect-practice.firebaseio.com/practice-data.json',
    //         this.itemsCatalogueService.getItems()
    //     );
    // }

    // retrieve data based on queryParams passed and sets the itemsCatalaogue array
    getItemsCatalogue(categorySelected: string){
      this.http.get< MainProduct[] >(
        `https://click-collect-practice.firebaseio.com/itemsCatalogue/${categorySelected}.json`
      )
        .subscribe(
          (products) => {
            // verify if products is exists
            if(!products){
              return [];
            }
            // console.log(products);
            this.itemsCatalogueService.setItemsCatalogue(products);
          },
          (error) => {
            console.log('request was unsuccessful');
            console.log(error);
          }
        )
    }
}
