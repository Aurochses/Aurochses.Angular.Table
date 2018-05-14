export function Actions(show = true, allowAdd = true, allowEdit = true, allowDelete = true) {
    return function actionsInternal(target: Object): void {
        Object.defineProperty(target, `${ActionsMetadata.show}`, {
            value: show,
            enumerable: false,
            configurable: false
        });

        Object.defineProperty(target, `${ActionsMetadata.allowAdd}`, {
            value: allowAdd,
            enumerable: false,
            configurable: false
        });

        Object.defineProperty(target, `${ActionsMetadata.allowEdit}`, {
            value: allowEdit,
            enumerable: false,
            configurable: false
        });

        Object.defineProperty(target, `${ActionsMetadata.allowDelete}`, {
            value: allowDelete,
            enumerable: false,
            configurable: false
        });
    };
}

export class ActionsMetadata {
    public static show = `__actions__show`;
    public static allowAdd = `__actions__allowAdd`;
    public static allowEdit = `__actions__allowEdit`;
    public static allowDelete = `__actions__allowDelete`;
}
