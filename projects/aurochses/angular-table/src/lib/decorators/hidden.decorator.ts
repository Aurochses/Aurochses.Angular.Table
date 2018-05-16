export function Hidden(hide = true) {
    return function hiddenInternal(target: Object, property: string | symbol): void {
        Object.defineProperty(
            target,
            `${HiddenMetadata.isHidden}${property.toString()}`,
            {
                value: hide,
                enumerable: false,
                configurable: false
            }
        );
    };
}

export class HiddenMetadata {
    public static isHidden = '__isHidden__';
}
