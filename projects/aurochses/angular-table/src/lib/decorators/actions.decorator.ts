import { ActionsModel } from '../models/actions.model';

export function Actions(show = true, allowAdd = true, allowEdit = true, allowDelete = true) {
    return function actionsInternal(target: Object): void {
        Object.defineProperty(
            target,
            `${ActionsMetadata.show}`,
            {
                value: show,
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

    if (`${ActionsMetadata.show}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.show}`] === true) {
        model.show = true;
    }

    if (`${ActionsMetadata.allowAdd}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.allowAdd}`] === true) {
        model.allowAdd = true;
    }

    if (`${ActionsMetadata.allowEdit}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.allowEdit}`] === true) {
        model.allowEdit = true;
    }

    if (`${ActionsMetadata.allowDelete}` in prototype.constructor && prototype.constructor[`${ActionsMetadata.allowDelete}`] === true) {
        model.allowDelete = true;
    }

    return model;
}

class ActionsMetadata {
    public static show = `__actions__show`;
    public static allowAdd = `__actions__allowAdd`;
    public static allowEdit = `__actions__allowEdit`;
    public static allowDelete = `__actions__allowDelete`;
}
