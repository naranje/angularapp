import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { IClue } from '../shared/interfaces/iclue';
import { DataService } from '../core/services/data.service';
import { FilterService } from '../core/services/filter.service';

@Component({
  selector: 'app-clues',
  templateUrl: './clues.component.html',
  styleUrls: ['./clues.component.css']
})
export class CluesComponent implements OnInit {

  title: String;
  clues: IClue[] = [];
  filteredClues: IClue[] = [];
  dateSearchForm; 

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private filterService: FilterService) { 
    this.dateSearchForm = this.formBuilder.group({
      startDate: new Date(),
      endDate: new Date
    });
  }

  ngOnInit() {
    this.title = "Search For Clues Between Dates";
  }
  
  getClues(dateSearchFormData){
    this.dataService.getClues(dateSearchFormData.startDate, dateSearchFormData.endDate).subscribe(
      (clues: IClue[]) => {
        this.clues = this.filteredClues = clues;
      },
      (err: any) => {
        //TODO: Add logging service 
        console.error(err);
      }
    );
  }

  filterChanged(data: string){
    if(data && this.clues){
      data = data.toUpperCase();
      const props = ['id', 'answer', 'question', 'category.title'];
      this.filteredClues = this.filterService.filter<IClue>(this.clues, data, props);
    }
    else{
      this.filteredClues = this.clues;
    }
  }
}
