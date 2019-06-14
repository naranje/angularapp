import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, //Singleton objects (services, components that are loaded only once)
    SharedModule //Shared objects (loaded multiple times)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
