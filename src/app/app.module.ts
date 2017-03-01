import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import * as AppComponents from './components';

export function toArray(obj) {
    return Object.keys(obj).map((k) => obj[k]);
}

@NgModule({
  declarations: [
    ...toArray(AppComponents),
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
