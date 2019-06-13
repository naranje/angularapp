import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CluesRoutingModule } from './clues-routing.module';

@NgModule({
  imports: [
    CommonModule, CluesRoutingModule
  ],
  declarations: [CluesRoutingModule.components]
})
export class CluesModule { }
