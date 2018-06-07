import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { getActionsModel } from './decorators/actions.decorator';
import { getDisplayName } from './decorators/display.decorator';
import { isHidden } from './decorators/hidden.decorator';

import { ActionsModel } from './models/actions.model';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'aur-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.scss']
})
export class TableComponent<T> implements OnInit {

  @Input() viewModel: T;
  @Input() dataSource: MatTableDataSource<T>;

  @Output() added = new EventEmitter<T>();
  @Output() edited = new EventEmitter<T>();
  @Output() deleted = new EventEmitter();

  private prototype: any;

  actionsColumnName = 'actionsColumn';

  properties: string[];
  columnsToDisplay: string[];
  actions: ActionsModel;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.properties = Object.keys(this.viewModel);

    this.columnsToDisplay = this.properties
      .filter(
        (property) => {
          return !isHidden(this.viewModel, property);
        }
      );

    this.actions = getActionsModel(this.viewModel);

    if (this.actions.showActionsColumn === true) {
      this.columnsToDisplay.push(this.actionsColumnName);
    }
  }

  getColumnDisplayName(property: string): string {
    return getDisplayName(this.viewModel, property);
  }

  add(): void {
    this.added.emit();
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
