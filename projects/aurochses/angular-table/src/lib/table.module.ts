import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table.component';

@NgModule({
  imports: [
    MatTableModule
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
