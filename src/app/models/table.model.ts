import { Select, Actions, Display, DisplayFormat, Hidden, DataType } from '@aurochses/angular-table';

@Select(false)
@Actions()
export class TableModel {
    @Display('TABLE.ID_COLUMN')
    id = 0;

    @Hidden()
    icon = '';

    @DisplayFormat('0.2-2')
    number = 0;

    openInNewWindow = false;

    @DisplayFormat('yyyy-MM', DataType.date)
    date: Date = new Date();
}
