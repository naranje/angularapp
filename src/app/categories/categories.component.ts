import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared/interfaces/icategory';
import { DataService } from '../core/services/data.service';
import { FilterService } from '../core/services/filter.service';
import { LoggingService } from '../core/services/logging.service';

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
    private filterService: FilterService,
    private loggingService: LoggingService) { }

  ngOnInit() {
    this.title = "Categories";
    this.filterText = "Filter Categories:";
    this.getCategoriesPage(1);
  }

  getCategoriesPage(page: number) {
    this.dataService.getCategoriesPage(page, this.pageSize)
      .subscribe((response: ICategory[]) => {
        this.categories = this.filteredCategories = response;
      }, (error: any) => {
        this.loggingService.logError(error);
      },
        () => { this.loggingService.log('Retrieved categories for page: ' + page); }
      );
  }

  pageChanged(page: number) {
    this.getCategoriesPage(page);
  }

  filterChanged(data: string) {
    if (data && this.categories) {
      data = data.toUpperCase();
      const props = ['id', 'title'];
      this.filteredCategories = this.filterService.filter<ICategory>(this.categories, data, props);
    }
    else {
      this.filteredCategories = this.categories;
    }
  }

}
