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

export class DisplayMetadata {
    public static displayName = `__displayName__`;
}
