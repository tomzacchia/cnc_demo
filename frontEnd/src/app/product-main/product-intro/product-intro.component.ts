import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { SpinnerService } from '../../services/spinner.service';
// for test purposes
import { MainHttpService } from '../../admin/http.service';

@Component({
  selector: 'app-product-intro',
  templateUrl: './product-intro.component.html',
  styleUrls: ['./product-intro.component.scss']
})
export class ProductIntroComponent implements OnInit, AfterViewInit {

  public categories: Category[] = [
    new Category('fruits','Fruits & Veg', 'https://goo.gl/BUbbn1'),
    new Category('meats','Meat', 'https://goo.gl/iYqPTy'),
    new Category('dairy','Dairy & Eggs', 'https://goo.gl/Se4cDv')
  ];

  private currentUrl: string;

  constructor(
    private router: Router,
    private spinnerService: SpinnerService,
    private mainHttpService: MainHttpService,
  ) { }

  ngOnInit() {
    this.currentUrl = this.router.url;
  }

  onNavigate(categorySelected: string){
    this.router.navigate( [ this.currentUrl, categorySelected ] );
    this.mainHttpService.testGetData(categorySelected);
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.spinnerService.spinnerOff();
    })
  }



}

export class Category {
  constructor(
    public categorySelected: string,
    public name: string,
    public img: string
  ){}
}
