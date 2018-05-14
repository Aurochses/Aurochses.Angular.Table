import { Component, OnInit, Input } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

import { ActionsMetadata } from './decorators/actions.decorator';
import { DisplayMetadata } from './decorators/display.decorator';
import { HiddenMetadata } from './decorators/hidden.decorator';
import { Display } from './models/display.model';

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

    if (`${ActionsMetadata.show}` in this.prototype.constructor
      && this.prototype.constructor[`${ActionsMetadata.show}`] === true) {
        this.columnsToDisplay.push(this.actionsColumnName);
    }
  }

  getDisplay(property: string): Display {
    const display = new Display();

    if (`${DisplayMetadata.displayName}${property}` in this.prototype) {
      display.name = this.prototype[`${DisplayMetadata.displayName}${property}`];
    } else {
      display.name = property;
    }

    return display;
  }

}
