import {Select, Actions, Display, DisplayFormat, Hidden, DataType, Paginator, Sort} from '@aurochses/angular-table';


@Select(false)
@Actions()
@Paginator(true, [1, 2, 3], true)
export class TableModel {
    @Display('TABLE.ID_COLUMN')
    @Sort(true)
    id = 0;

    @Hidden()
    icon = '';

    @DisplayFormat('0.2-2')
    number = 0;

    openInNewWindow = false;

    @DisplayFormat('yyyy-MM', DataType.date)
    date: Date = new Date();
}
