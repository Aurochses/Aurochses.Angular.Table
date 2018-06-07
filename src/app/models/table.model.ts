import { Select, Actions, Display, Hidden } from '@aurochses/angular-table';

@Select(false)
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
