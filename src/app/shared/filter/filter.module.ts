import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [FilterComponent],
  declarations: [FilterComponent]
})
export class FilterModule { }
