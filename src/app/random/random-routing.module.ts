import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomComponent } from './random.component';
import { RandomClueComponent } from './random-clue/random-clue.component';

const routes: Routes = [
  {path: '', component: RandomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RandomRoutingModule { 
  static components = [RandomComponent, RandomClueComponent];
}
