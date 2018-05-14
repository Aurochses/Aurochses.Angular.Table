import { Component, OnInit, Input } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

import { DisplayMetadata } from './decorators/display.decorator';
import { HiddenMetadata } from './decorators/hidden.decorator';
import { Display } from './models/display.model';

@Component({
  selector: 'aur-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.scss']
})
export class TableComponent<T> implements OnInit {

  @Input() viewModel: T;
  @Input() dataSource: MatTableDataSource<T>;

  prototype: any;
  properties: string[];
  columnsToDisplay: string[];

  constructor() { }

  ngOnInit() {
    this.prototype = Object.getPrototypeOf(this.viewModel);
    this.properties = Object.keys(this.viewModel);
    this.columnsToDisplay = this.getColumnsToDisplay();
  }

  private getColumnsToDisplay(): string[] {
    const items = this.properties
      .filter(
        (property) => {
          return !(`${HiddenMetadata.isHidden}${property}` in this.prototype
            && this.prototype[`${HiddenMetadata.isHidden}${property}`] === true);
        }
      );

    items.push('actions');

    return items;
  }

  private getDisplay(property: string): Display {
    const display = new Display();

    if (`${DisplayMetadata.displayName}${property}` in this.prototype) {
      display.name = this.prototype[`${DisplayMetadata.displayName}${property}`];
    } else {
      display.name = property;
    }

    return display;
  }

}
