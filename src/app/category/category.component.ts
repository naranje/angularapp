import { Component, OnInit } from '@angular/core';
import { IClue } from '../shared/interfaces/iclue';
import { ICategory } from '../shared/interfaces/icategory';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title: string;
  clues: IClue[] = [];
  category: ICategory;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    //TODO: Add category name to this
    this.title = "Category Clues";
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const categoryId = +params['id'];
      this.dataService.getCategoryClues(categoryId).subscribe(
        (clues: IClue[]) => {
          this.clues = clues;
        });
    });
  }

}
