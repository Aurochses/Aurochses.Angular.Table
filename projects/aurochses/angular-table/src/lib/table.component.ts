import { Component, OnInit, Input, Output, EventEmitter, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { formatNumber, formatDate } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';

import { getSelectModel } from './decorators/select.decorator';
import { getActionsModel } from './decorators/actions.decorator';
import { getPaginatorModel } from './decorators/paginator.decorator';
import { getDisplayName } from './decorators/display.decorator';
import { hasDisplayFormatModel, getDisplayFormatModel } from './decorators/display-format.decorator';
import { isHidden } from './decorators/hidden.decorator';

import { SelectModel } from './models/select.model';
import { ActionsModel } from './models/actions.model';

import { PaginatorModel } from './models/paginator.model';
import { DataType } from './models/data.type';

import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';


@Component({
  selector: 'aur-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.scss']
})
export class TableComponent<T> implements OnInit {

  @Input() viewModel: T;
  @Input() dataSource: MatTableDataSource<T>;

  @Output() selected = new EventEmitter<T[]>();
  @Output() added = new EventEmitter<T>();
  @Output() edited = new EventEmitter<T>();
  @Output() deleted = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private prototype: any;

  selectColumnName = 'selectColumn';
  actionsColumnName = 'actionsColumn';

  properties: string[];
  columnsToDisplay: string[] = new Array<string>();
  select: SelectModel;
  selection: SelectionModel<T>;
  actions: ActionsModel;
  paginatorOptions: PaginatorModel;

  constructor(@Inject(LOCALE_ID) private locale: string, private dialog: MatDialog) { }

  ngOnInit() {
    this.properties = Object.keys(this.viewModel);

    this.select = getSelectModel(this.viewModel);

    if (this.select.allowSelect === true) {
      this.selection = new SelectionModel<T>(this.select.allowMultiSelect);
      this.selection.onChange.subscribe(
        selectionChange => {
          this.selected.emit(selectionChange.source.selected);
        }
      );

      this.columnsToDisplay.push(this.selectColumnName);
    }

    this.columnsToDisplay.push(
      ...this.properties
        .filter(
          (property) => {
            return !isHidden(this.viewModel, property);
          }
        )
    );

    this.actions = getActionsModel(this.viewModel);
    this.paginatorOptions = getPaginatorModel(this.viewModel);

    if (this.actions.showActionsColumn === true) {
      this.columnsToDisplay.push(this.actionsColumnName);
    }
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;

    return numSelected === numRows;
  }

  multiSelectToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  getColumnDisplayName(property: string): string {
    return getDisplayName(this.viewModel, property);
  }

  getColumnValue(item: T, property: string): string {
    const hasFormat = hasDisplayFormatModel(this.viewModel, property);

    if (hasFormat === true) {
      const displayFormat = getDisplayFormatModel(this.viewModel, property);

      if (item[property] instanceof Date || displayFormat.dataType === DataType.date) {
        return formatDate(item[property], displayFormat.format, this.locale);
      }

      if (typeof item[property] === 'number') {
        return formatNumber(item[property], this.locale, displayFormat.format);
      }
    }

    return item[property];
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
