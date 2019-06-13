import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IClue } from '../../shared/interfaces/iclue';

@Component({
  selector: 'app-clues-grid',
  templateUrl: './clues-grid.component.html',
  styleUrls: ['./clues-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CluesGridComponent implements OnInit {

  @Input() clues: IClue[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
