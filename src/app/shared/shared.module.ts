import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterModule } from './filter/filter.module';
import { PagingModule } from './paging/paging.module';

@NgModule({
  imports: [
    CommonModule, FilterModule, PagingModule
  ],
  exports: [FilterModule, PagingModule]
})
export class SharedModule { }
