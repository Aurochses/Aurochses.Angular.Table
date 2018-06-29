import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { TableModel } from '../../models/table.model';

const DATA: TableModel[] = [
  { id: 1, icon: 'Hydrogen', number: 1.0079, openInNewWindow: true, date: new Date(2018, 0, 31) },
  { id: 2, icon: 'New', number: 2.9, openInNewWindow: false, date: new Date(2018, 1, 28) }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  viewModel: TableModel = new TableModel();
  dataSource = new MatTableDataSource(DATA);

  select(items: TableModel[]) {
    console.log(items);
  }

  add(): void {
    console.log('user clicked add button');
  }

  edit(item: TableModel): void {
    console.log(item);
  }

  delete(item: TableModel): void {
    console.log(item);
  }
}
