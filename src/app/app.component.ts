import { Component } from '@angular/core';

import { TableModel } from './models/table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  tableViewModel: TableModel = new TableModel();
}
