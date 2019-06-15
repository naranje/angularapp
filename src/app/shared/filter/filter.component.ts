import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  model: { filter: string } = { filter: null };

  @Output()
  changed: EventEmitter<string> = new EventEmitter<string>();

  filterChanged(event: any) {
    event.preventDefault();
    this.changed.emit(this.model.filter); // Raise changed event
  }

}
