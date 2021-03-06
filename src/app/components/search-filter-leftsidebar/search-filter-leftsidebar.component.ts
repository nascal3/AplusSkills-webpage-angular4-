import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchServiceService } from '../../services/search.service';
import { FilterInterface } from '../../model/Filter.interface';

@Component({
  selector: 'app-search-filter-leftsidebar',
  templateUrl: './search-filter-leftsidebar.component.html',
  styleUrls: ['./search-filter-leftsidebar.component.css']
})
export class SearchFilterLeftsidebarComponent implements OnInit {

  @Output() filterResults = new EventEmitter();

  filter: FilterInterface = {
    priceRange : [0, 80000],
    distanceRange: [0, 40],
    starsCount: 0,
    category: '',
    offer: false,
    morning: '',
    afternoon: '',
    evening: '',
  };

  priceRangeConfig: any = {
    behaviour: 'drag',
    connect: true,
    step: 10000,
    margin: 10000,
    range: {min: 0, max: 100000},
    start: [0, 100000]
  };

  distanceRangeConfig: any = {
    behaviour: 'drag',
    connect: true,
    step: 5,
    margin: 5,
    range: {min: 0, max: 50},
    start: [0, 50]
  };

  scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };

  constructor(
    public searchSrv: SearchServiceService
  ) { }

  ngOnInit() {
  }

  runFilter(event) {
    // console.log(this.filter);
    this.implementFilter();
  }

  implementFilter() {
     this.searchSrv.getSearchFilterResults(this.filter).subscribe(res => {
        this.filterResults.emit(res);
        // console.log(res);
     });
  }


}
