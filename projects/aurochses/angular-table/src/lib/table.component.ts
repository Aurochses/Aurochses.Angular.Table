import { Component, OnInit, Input } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

import { ActionsMetadata } from './decorators/actions.decorator';
import { DisplayMetadata } from './decorators/display.decorator';
import { HiddenMetadata } from './decorators/hidden.decorator';

import { Actions } from './models/actions.model';

@Component({
  selector: 'aur-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.scss']
})
export class TableComponent<T> implements OnInit {

  actionsColumnName = 'actionsColumn';

  @Input() viewModel: T;
  @Input() dataSource: MatTableDataSource<T>;

  private prototype: any;

  properties: string[];
  columnsToDisplay: string[];
  actions: Actions;

  constructor() { }

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

    this.actions = new Actions(this.prototype);

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

}
