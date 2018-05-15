import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { TableModel } from '../../models/table.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  viewModel: TableModel = new TableModel();
  dataSource = new MatTableDataSource(DATA);

  edit(item: TableModel): void {
    console.log(item);
  }

  delete(item: TableModel): void {
    console.log(item);
  }
}

const DATA: TableModel[] = [
  { id: '1', icon: 'Hydrogen', title: '1.0079', url: 'H', openInNewWindow: true }
];
