import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { CluesComponent } from './clues.component';
import { CluesGridComponent } from './clues-grid/clues-grid.component';

const routes: Routes = [
  {path: '', component: CluesComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class CluesRoutingModule { 
  static components = [CluesComponent, CluesGridComponent];
}
