import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TranslateModule } from '@ngx-translate/core';

import { TableComponent } from './table.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  declarations: [
    TableComponent,
    DeleteDialogComponent
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  exports: [
    TableComponent
  ]
})
export class AurTableModule { }
