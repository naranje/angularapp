import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterService } from './services/filter.service';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, BrowserAnimationsModule],
  exports: [RouterModule, HttpClientModule, NavbarComponent, BrowserAnimationsModule],
  providers: [DataService, FilterService],
  declarations: [NavbarComponent]
})

/**
 * This module should be a singleton, so we are going to ensure that the CoreModule is only loaded into AppModule
 */
export class CoreModule extends EnsureModuleLoadedOnceGuard{
  
  //Looks for the module in the parent injector to see if it's already been loaded
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    super(parentModule);
  }
 }
