import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { IClue } from '../shared/interfaces/iclue';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-clues',
  templateUrl: './clues.component.html',
  styleUrls: ['./clues.component.css']
})
export class CluesComponent implements OnInit {

  title: String;
  clues: IClue[] = [];
  dateSearchForm; 

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { 
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
      (response: IClue[]) => {
        this.clues = response;
      },
      (err: any) => {
        //TODO: Add logging service 
        console.error(err);
      }
    )
  }
}
