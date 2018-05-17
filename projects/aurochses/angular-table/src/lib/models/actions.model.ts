import { ActionsMetadata } from '../decorators/actions.decorator';

export class ActionsModel {

    constructor(prototype: any) {
        if (`${ActionsMetadata.show}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.show}`] === true) {
            this.show = true;
        }

        if (`${ActionsMetadata.allowAdd}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.allowAdd}`] === true) {
            this.allowAdd = true;
        }

        if (`${ActionsMetadata.allowEdit}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.allowEdit}`] === true) {
            this.allowEdit = true;
        }

        if (`${ActionsMetadata.allowDelete}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.allowDelete}`] === true) {
            this.allowDelete = true;
        }
    }

    show: boolean;
    allowAdd: boolean;
    allowEdit: boolean;
    allowDelete: boolean;
}
