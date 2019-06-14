import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared/interfaces/icategory';
import { DataService } from '../core/services/data.service';
import { FilterService } from '../core/services/filter.service';
import { IPagedResults } from '../shared/interfaces/ipaged-results';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  title: string;
  filterText: string;
  categories: ICategory[] = [];
  filteredCategories: ICategory[] = [];
  totalRecords = 0;
  pageSize = 100;

  constructor(private dataService: DataService,
    private filterService: FilterService) { }

  ngOnInit() {
    this.title = "Categories"
    this.filterText = "Filter Categories:"

    this.getCategoriesPage(1);
  }

  getCategoriesPage(page: number){
    this.dataService.getCategoriesPage(1, this.pageSize)
    .subscribe((response: IPagedResults<ICategory[]>) => {
      this.categories = this.filteredCategories = response.results;
      this.totalRecords = response.totalRecords;
    },(error: any) => {
      //TODO: Add logging service
      console.error(error);
    },
    () => {console.log('Retrieved categories for page: ' + page);}
    )
  }

  pageChanged(page: number){

  }

  filterChanged(data: string){

  }

}
