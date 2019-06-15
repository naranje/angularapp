import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { FilterModule } from './filter/filter.module';
import { PagingModule } from './paging/paging.module';

@NgModule({
  imports: [
    CommonModule, 
    FilterModule, 
    PagingModule, 
    MatDatepickerModule, 
    MatNativeDateModule 
  ],
  exports: [
    FilterModule, 
    PagingModule, 
    MatDatepickerModule, 
    MatNativeDateModule ]
})
/**
 *SharedModule is a conventional name for an NgModule with the components, directives, and pipes that you use everywhere in your app. 
  This module should consist entirely of declarations, most of them exported. The SharedModule may re-export other widget modules, 
  such as CommonModule, FormsModule, and NgModules with the UI controls that you use most widely
 */
export class SharedModule { }
