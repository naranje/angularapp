import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CategoriesRoutingModule.components],
  imports: [
    CategoriesRoutingModule, CommonModule, SharedModule
  ]
})

export class CategoriesModule { }
