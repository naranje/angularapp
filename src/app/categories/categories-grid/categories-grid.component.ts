import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/icategory';

@Component({
  selector: 'app-categories-grid',
  templateUrl: './categories-grid.component.html',
  styleUrls: ['./categories-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesGridComponent implements OnInit {

  @Input() categories: ICategory[] = [];
   
  constructor() { }

  ngOnInit() {
  }

}
