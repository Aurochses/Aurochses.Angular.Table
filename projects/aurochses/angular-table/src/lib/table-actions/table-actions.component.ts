import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent {

  @Input() item: any;
  @Input() disableEdit: boolean;
  @Input() disableDelete: boolean;

  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  allowEdit(): boolean {
    return this.disableEdit ? !this.disableEdit : true;
  }

  edit() {
    this.edited.emit();
  }

  allowDelete(): boolean {
    return this.disableDelete ? !this.disableDelete : true;
  }

  delete() {
    this.deleted.emit();
  }

}
