import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { TableModel } from '../../models/table.model';

const DATA: TableModel[] = [
  { id: '1', icon: 'Hydrogen', title: '1.0079', url: 'H', openInNewWindow: true },
  { id: '2', icon: 'New', title: '2.9', url: 'url', openInNewWindow: false }
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
