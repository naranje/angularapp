import { Component, OnInit, Input } from '@angular/core';
import { IClue } from '../../shared/interfaces/iclue';

@Component({
  selector: 'app-random-clue',
  templateUrl: './random-clue.component.html',
  styleUrls: ['./random-clue.component.css']
})
export class RandomClueComponent implements OnInit {

  @Input() clue: IClue;
  
  constructor() { }

  ngOnInit() {
  }

}
