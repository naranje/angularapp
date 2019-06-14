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
  clues: IClue[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = "Clues";
    this.getClues();
  }
  
  getClues(){
    //TODO: Get these from the form
    let minDate = "2014-02-01";
    let maxDate = "2014-02-03";
    
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
