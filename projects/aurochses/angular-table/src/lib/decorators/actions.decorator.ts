import { ActionsModel } from '../models/actions.model';

class ActionsMetadata {
    public static showToolbar = `__actions__showToolbar`;
    public static allowAdd = `__actions__allowAdd`;
    public static showActionsColumn = `__actions__showActionsColumn`;
    public static allowEdit = `__actions__allowEdit`;
    public static allowDelete = `__actions__allowDelete`;
}

export function Actions(showToolbar = true, allowAdd = true, showActionsColumn = true, allowEdit = true, allowDelete = true) {
    return function actionsInternal(target: Object): void {
        Object.defineProperty(
            target,
            `${ActionsMetadata.showToolbar}`,
            {
                value: showToolbar,
                enumerable: false,
                configurable: false
            }
        );

        Object.defineProperty(
            target,
            `${ActionsMetadata.allowAdd}`,
            {
                value: allowAdd,
                enumerable: false,
                configurable: false
            }
        );

        Object.defineProperty(
            target,
            `${ActionsMetadata.showActionsColumn}`,
            {
                value: showActionsColumn,
                enumerable: false,
                configurable: false
            }
        );

        Object.defineProperty(
            target,
            `${ActionsMetadata.allowEdit}`,
            {
                value: allowEdit,
                enumerable: false,
                configurable: false
            }
        );

        Object.defineProperty(
            target,
            `${ActionsMetadata.allowDelete}`,
            {
                value: allowDelete,
                enumerable: false,
                configurable: false
            }
        );
    };
}

export function getActionsModel<T>(instance: T): ActionsModel {
    const prototype = Object.getPrototypeOf(instance);

    const model = new ActionsModel();

    if (`${ActionsMetadata.showToolbar}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.showToolbar}`] === true) {
        model.showToolbar = true;
    }

    if (`${ActionsMetadata.allowAdd}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.allowAdd}`] === true) {
        model.allowAdd = true;
    }

    if (
        `${ActionsMetadata.showActionsColumn}` in prototype.constructor
        && prototype.constructor[`${ActionsMetadata.showActionsColumn}`] === true
    ) {
        model.showActionsColumn = true;
    }

    if (`${ActionsMetadata.allowEdit}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.allowEdit}`] === true) {
        model.allowEdit = true;
    }

    if (`${ActionsMetadata.allowDelete}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.allowDelete}`] === true) {
        model.allowDelete = true;
    }

    return model;
}
