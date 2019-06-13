import { Component, OnInit } from '@angular/core';

import { IClue } from '../shared/interfaces/iclue';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-clues',
  templateUrl: './clues.component.html',
  styleUrls: ['./clues.component.css']
})
export class CluesComponent implements OnInit {

  clues: IClue[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getClues();
  }
  
  getClues(){
    this.dataService.getClues().subscribe(
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
