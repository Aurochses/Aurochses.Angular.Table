import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

import { TableModel } from './models/table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  tableViewModel: TableModel = new TableModel();
  dataSource = new MatTableDataSource(DATA);
}

const DATA: TableModel[] = [
  { id: '1', icon: 'Hydrogen', title: '1.0079', url: 'H', openInNewWindow: true }
];
