import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {HomePageComponent} from './home-page/home-page.component';
import {routingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    routingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
