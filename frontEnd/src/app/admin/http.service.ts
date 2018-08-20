import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MainProduct, Cost, Filters } from "./product.model";

@Injectable()
export class MainHttpService{

  fruits: MainProduct[] = [
    new MainProduct(
      'qghsrh', 'Strawberries', 'https://goo.gl/kgmGVk'
      , 0, new Cost(5.99, 5.99), new Filters('fruits','berry')
    ),
    new MainProduct(
      'fadvadg', 'Limes', 'https://goo.gl/euvWeW'
      , 0, new Cost(2.99, 2.99), new Filters('fruits','citrus')
    )
  ]
  meats: MainProduct[] = [
    new MainProduct(
      'ebdba', 'Ribeye Steak', 'https://goo.gl/mHR6kQ'
      , 0, new Cost(12.99, 8.99), new Filters('meat','beef')
    ),
    new MainProduct(
      'atersju', 'Chicken Breast', 'https://goo.gl/XTj5F6'
      , 0, new Cost(8.99, 4.99), new Filters('meat','chicken')
    )
  ]
  dairy: MainProduct[] = [
    new MainProduct(
      'qerhsrh', 'Eggs (12)', 'https://goo.gl/f8JKNk'
      , 0, new Cost(6.99, 0.99), new Filters('dairy','eggs')
    ),
    new MainProduct(
      'fgeheahe', '2% Milk (2L)', 'https://goo.gl/S4kLBa'
      , 0, new Cost(2.99, 2.99), new Filters('dairy','dairy')
    )
  ]

  constructor( private http: HttpClient ){ }

  sendData(){
    this.http.put('https://click-collect-practice.firebaseio.com/itemsCatalogue/fruits.json',
    this.fruits). subscribe(
      (response: Response) => {
        console.log(response);
        console.log('fruits successful');
      }
    )
    this.http.put('https://click-collect-practice.firebaseio.com/itemsCatalogue/meats.json',
    this.meats). subscribe(
      (response: Response) => {
        console.log(response);
        console.log('meats successful');
      }
    )
    this.http.put('https://click-collect-practice.firebaseio.com/itemsCatalogue/dairy.json',
    this.dairy). subscribe(
      (response: Response) => {
        console.log(response);
        console.log('dairy successful');
      }
    )
  }
}
