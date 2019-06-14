import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryCluesComponent } from './category-clues/category-clues.component';

const routes: Routes = [
  {path:'', component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
  static components = [CategoryComponent, CategoryCluesComponent]
}
