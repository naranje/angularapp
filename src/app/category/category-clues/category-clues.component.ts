import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IClue } from '../../shared/interfaces/iclue';

@Component({
  selector: 'app-category-clues',
  templateUrl: './category-clues.component.html',
  styleUrls: ['./category-clues.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryCluesComponent implements OnInit {

  @Input() clues: IClue[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
