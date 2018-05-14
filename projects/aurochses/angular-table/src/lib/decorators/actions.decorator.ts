export function Actions(show = true) {
    return function actionsInternal(target: Object): void {
        Object.defineProperty(target, `${ActionsMetadata.show}`, {
            value: show,
            enumerable: false,
            configurable: false
        });
    };
}

export class ActionsMetadata {
    public static show = `__actions__show`;
}
