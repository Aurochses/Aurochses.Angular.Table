class DisplayFormatMetadata {
    public static hasDisplayFormat = '__hasDisplayFormat__';
    public static displayFormat = `__displayFormat__`;
}

export function DisplayFormat(format: string) {
    return function displayFormatInternal(target: Object, property: string | symbol): void {
        Object.defineProperty(
            target,
            `${DisplayFormatMetadata.hasDisplayFormat}${property.toString()}`,
            {
                value: true,
                configurable: false,
                enumerable: false
            }
        );

        Object.defineProperty(
            target,
            `${DisplayFormatMetadata.displayFormat}${property.toString()}`,
            {
                value: format,
                enumerable: false,
                configurable: false
            }
        );
    };
}

export function hasDisplayFormat<T>(instance: T, property: string): boolean {
    const prototype = Object.getPrototypeOf(instance);

    return !!prototype[`${DisplayFormatMetadata.hasDisplayFormat}${property}`];
}

export function getDisplayFormat<T>(instance: T, property: string): string {
    if (hasDisplayFormat(instance, property)) {
        const prototype = Object.getPrototypeOf(instance);

        return prototype[`${DisplayFormatMetadata.displayFormat}${property}`];
    }

    return null;
}
