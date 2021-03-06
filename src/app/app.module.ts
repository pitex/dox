import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {MaterialModule} from './material/material.module';
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
export class AppModule {
}
