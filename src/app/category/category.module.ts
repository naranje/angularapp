import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CluesModule } from '../clues/clues.module';

@NgModule({
  declarations: [CategoryRoutingModule.components],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    CluesModule
  ]
})
export class CategoryModule { }
