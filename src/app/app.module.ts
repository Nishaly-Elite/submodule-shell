import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CscModule } from 'projects/csc/src/public-api';
import { CcoModule } from 'cco';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CscModule,
    CcoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
