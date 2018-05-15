import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutesModule,
    MainModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
