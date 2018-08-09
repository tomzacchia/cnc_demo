import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss'],
  providers: [ FilterService ]
})
export class SortFilterComponent implements OnInit {
  productDrop = true;
  displayFlag = false;

  constructor() { }

  ngOnInit() {
  }

  filterOptionsDisplay() {
    this.displayFlag = !this.displayFlag;
  }
}
