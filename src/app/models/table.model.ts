import {Actions, Display, Hidden, Paginator} from '@aurochses/angular-table';

@Actions()
@Paginator(true, [1, 2, 3], false)
export class TableModel {
    @Display('TABLE.ID_COLUMN')
    id = '';
    @Hidden()
    icon = '';
    title = '';
    url = '';
    openInNewWindow = false;
}
