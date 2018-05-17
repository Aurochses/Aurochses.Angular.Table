export function Display(name: string) {
    return function displayInternal(target: Object, property: string | symbol): void {
        Object.defineProperty(
            target,
            `${DisplayMetadata.displayName}${property.toString()}`,
            {
                value: name,
                enumerable: false,
                configurable: false
            }
        );
    };
}

export function getDisplayName<T>(instance: T, property: string): string {
    const prototype = Object.getPrototypeOf(instance);

    if (`${DisplayMetadata.displayName}${property}` in prototype) {
        return prototype[`${DisplayMetadata.displayName}${property}`];
    } else {
        return property;
    }
}

class DisplayMetadata {
    public static displayName = `__displayName__`;
}
