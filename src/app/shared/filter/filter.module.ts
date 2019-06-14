import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';

@NgModule({
    imports: [
    CommonModule
  ],
  exports: [FilterComponent],
  declarations: [FilterComponent]
})
export class FilterModule { }
