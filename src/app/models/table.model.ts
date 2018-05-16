import { Actions, Display, Hidden } from '@aurochses/angular-table';

@Actions()
export class TableModel {
    @Display('TABLE.ID_COLUMN')
    id = '';
    @Hidden()
    icon = '';
    title = '';
    url = '';
    openInNewWindow = false;
}
