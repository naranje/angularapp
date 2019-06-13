import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomRoutingModule } from './random-routing.module';

@NgModule({
  declarations: [RandomRoutingModule.components],
  imports: [CommonModule, RandomRoutingModule]
})
export class RandomModule { }
