import { Component, OnInit } from '@angular/core';

import { IClue } from '../shared/interfaces/iclue';
import { DataService } from '../core/services/data.service';
import { LoggingService } from '../core/services/logging.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  title: string;
  clue: IClue;
  constructor(private dataService: DataService, private loggingService: LoggingService) { }

  ngOnInit() {
    this.title = "Random Question";
    this.getRandomClue();
  }

  getRandomClue(){
    this.dataService.getRandomClue().subscribe(
      (response: IClue) => {
        this.clue = response;
      },
      (err: any) => {
        this.loggingService.logError(err);
      }
    );
  }

}
