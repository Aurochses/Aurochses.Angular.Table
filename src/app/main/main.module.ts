import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AurTableModule } from '@aurochses/angular-table';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AurTableModule,
  ]
})
export class MainModule { }
