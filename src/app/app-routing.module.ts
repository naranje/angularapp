import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/random'},
  // {path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
  {path: 'random', loadChildren: './random/random.module#RandomModule' },
  {path: 'categories', loadChildren: './categories/categories.module#CategoriesModule' },
  {path: 'category/:id', loadChildren: './category/category.module#CategoryModule' },
  {path: 'clues', loadChildren: './clues/clues.module#CluesModule' },
  {path: '**', pathMatch: 'full', redirectTo: '/random'} //catch all unfound routes and redirect to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
