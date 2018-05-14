import { Display, Hidden } from '@aurochses/angular-table';

export class TableModel {
    @Display('Eugene Id Column')
    id = '';
    @Hidden()
    icon = '';
    title = '';
    url = '';
    openInNewWindow = false;
}
