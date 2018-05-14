import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table.component';
import { TableActionsComponent } from "./table-actions/table-actions.component";
import { MatIconModule} from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { DeleteComponent } from "./delete/delete.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    TableComponent,
    TableActionsComponent,
    DeleteComponent
  ],
  exports: [
    TableComponent
  ],
  entryComponents: [
    DeleteComponent
  ]
})
export class TableModule { }
