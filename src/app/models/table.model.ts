import { Actions, Display, Hidden } from '@aurochses/angular-table';

@Actions()
export class TableModel {
    @Display('Id Column')
    id = '';
    @Hidden()
    icon = '';
    title = '';
    url = '';
    openInNewWindow = false;
}
