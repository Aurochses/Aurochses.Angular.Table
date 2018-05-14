import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aur-table',
  templateUrl: './table.component.html'
})
export class TableComponent<T> implements OnInit {

  @Input() viewModel: T;

  properties: string[];

  constructor() { }

  ngOnInit() {
    this.properties = Object.keys(this.viewModel);
  }

}
