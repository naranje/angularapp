import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [CategoriesRoutingModule.components],
  imports: [
    CategoriesRoutingModule, CommonModule
  ]
})

export class CategoriesModule { }
