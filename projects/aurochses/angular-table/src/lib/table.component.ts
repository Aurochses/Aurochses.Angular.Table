import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { ActionsMetadata } from './decorators/actions.decorator';
import { DisplayMetadata } from './decorators/display.decorator';
import { HiddenMetadata } from './decorators/hidden.decorator';

import { ActionsModel } from './models/actions.model';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'aur-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.scss']
})
export class TableComponent<T> implements OnInit {

  actionsColumnName = 'actionsColumn';

  @Input() viewModel: T;
  @Input() dataSource: MatTableDataSource<T>;

  @Output() edited = new EventEmitter<T>();
  @Output() deleted = new EventEmitter();

  private prototype: any;

  properties: string[];
  columnsToDisplay: string[];
  actions: ActionsModel;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.prototype = Object.getPrototypeOf(this.viewModel);
    this.properties = Object.keys(this.viewModel);

    this.columnsToDisplay = this.properties
      .filter(
        (property) => {
          return !(`${HiddenMetadata.isHidden}${property}` in this.prototype
            && this.prototype[`${HiddenMetadata.isHidden}${property}`] === true);
        }
      );

    this.actions = new ActionsModel(this.prototype);

    if (this.actions.show === true) {
      this.columnsToDisplay.push(this.actionsColumnName);
    }
  }

  getDisplayName(property: string): string {
    if (`${DisplayMetadata.displayName}${property}` in this.prototype) {
      return this.prototype[`${DisplayMetadata.displayName}${property}`];
    } else {
      return property;
    }
  }

  edit(item): void {
    this.edited.emit(item);
  }

  delete(item): void {
    const dialog = this.dialog.open(DeleteDialogComponent);

    dialog.afterClosed().subscribe(
      result => {
        if (result) {
          this.deleted.emit(item);
        }
      }
    );
  }

}
