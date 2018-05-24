class HiddenMetadata {
    public static hidden = '__hidden__';
}

export function Hidden(hide = true) {
    return function hiddenInternal(target: Object, property: string | symbol): void {
        Object.defineProperty(
            target,
            `${HiddenMetadata.hidden}${property.toString()}`,
            {
                value: hide,
                enumerable: false,
                configurable: false
            }
        );
    };
}

export function isHidden<T>(instance: T, property: string): boolean {
    const prototype = Object.getPrototypeOf(instance);

    return !!prototype[`${HiddenMetadata.hidden}${property}`];
}
