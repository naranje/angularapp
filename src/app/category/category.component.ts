import { Component, OnInit } from '@angular/core';
import { IClue } from '../shared/interfaces/iclue';
import { ICategory } from '../shared/interfaces/icategory';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { FilterService } from '../core/services/filter.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title: string;
  clues: IClue[] = [];
  filteredClues: IClue[] = [];
  category: ICategory;

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private filterService: FilterService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const categoryId = +params['id'];
      this.getCategoryClues(categoryId);
    });
  }

  private getCategoryClues(categoryId: number) {
    this.dataService.getCategoryClues(categoryId).subscribe(
      (clues: IClue[]) => {
        this.clues = this.filteredClues = clues;
        this.title = `Clues for category: "${this.clues[0].category.title}"`
      },
      (err: any) => {
        //TODO: Add logging service 
        console.error(err);
      }
    );
  }

  filterChanged(data: string) {
    if (data && this.clues) {
      data = data.toUpperCase();
      const props = ['id', 'answer', 'question', 'category.title'];
      this.filteredClues = this.filterService.filter<IClue>(this.clues, data, props);
    }
    else {
      this.filteredClues = this.clues;
    }
  }
}
