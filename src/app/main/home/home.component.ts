import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TableModel } from '../../models/table.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  viewModel: TableModel = new TableModel();
  dataSource: TableModel[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<TableModel[]>(`/assets/table.model.json`)
      .subscribe(
        (items: TableModel[]) => {
          this.dataSource = items;
        }
      );
  }

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
