import { Component, OnInit } from '@angular/core';

import { IClue } from '../shared/interfaces/iclue';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-clues',
  templateUrl: './clues.component.html',
  styleUrls: ['./clues.component.css']
})
export class CluesComponent implements OnInit {

  title: String;
  startDate: Date;
  endDate: Date;
  clues: IClue[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = "Clues";
  }
  
  getClues(startDate: string, endDate: string){
    //TODO: Add input validation 
    const minDate = new Date(startDate);
    const maxDate = new Date(endDate);

    this.dataService.getClues(minDate, maxDate).subscribe(
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
