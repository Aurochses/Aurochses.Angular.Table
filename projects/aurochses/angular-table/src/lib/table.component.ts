import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aur-table',
  templateUrl: './table.component.html'
})
export class TableComponent<T> implements OnInit {

  @Input() viewModel: T;

  constructor() { }

  ngOnInit() {
    console.log(this.viewModel);
    console.log(Object.getOwnPropertyNames(this.viewModel));
  }

}
