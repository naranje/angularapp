import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CluesRoutingModule } from './clues-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, CluesRoutingModule, SharedModule  
  ],
  declarations: [CluesRoutingModule.components]
})
export class CluesModule { }
