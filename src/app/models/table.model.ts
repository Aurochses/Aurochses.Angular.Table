import { Select, Actions, Display, DisplayFormat, Hidden } from '@aurochses/angular-table';

@Select(false)
@Actions()
export class TableModel {
    @Display('TABLE.ID_COLUMN')
    id = 0;

    @Hidden()
    icon = '';

    @DisplayFormat('0.2-2')
    number = 0;

    url = '';

    openInNewWindow = false;

    @DisplayFormat('yyyy-MM')
    date: Date = new Date();
}
