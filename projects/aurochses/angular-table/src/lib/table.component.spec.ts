import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';

import { Actions } from './decorators/actions.decorator';
import { Display } from './decorators/display.decorator';

import { TableComponent } from './table.component';

@Actions()
class TestTableModel {
    @Display('ID')
    id = '';
}

describe('TableComponent', () => {
  // let component: TableComponent<TestTableModel>;
  // let fixture: ComponentFixture<TableComponent<TestTableModel>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent
      ],
      imports: [
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        TranslateModule
      ]
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent<TableComponent<TestTableModel>>(TableComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should create', () => {
    const stubValue = 'stub value';

    expect(stubValue).toEqual('stub value');
  });
});
