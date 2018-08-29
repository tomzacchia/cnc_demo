import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { MainProduct, Cost, Filters } from "./product.model";
import { ItemsCatalogueService } from "../services/items-catalogue.service";


@Injectable()
export class MainHttpService{

  constructor(
    private http: HttpClient,
    private itemsCatalogueService: ItemsCatalogueService
   ){ }

  // Get Data from DB based on URL params
  testGetData(categorySelected: string){
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
        (error) => console.log(error)
      )
  }
}
