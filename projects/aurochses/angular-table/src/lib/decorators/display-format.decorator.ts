import { DataType } from '../models/data.type';
import { DisplayFormatModel } from '../models/display-format.model';

class DisplayFormatMetadata {
    public static hasDisplayFormat = '__hasDisplayFormat__';
    public static displayFormat = `__displayFormat__`;
    public static displayFormatDataType = `__displayFormatDataType__`;
}

export function DisplayFormat(format: string, dataType = DataType.default) {
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

        Object.defineProperty(
            target,
            `${DisplayFormatMetadata.displayFormatDataType}${property.toString()}`,
            {
                value: dataType,
                enumerable: false,
                configurable: false
            }
        );
    };
}

export function hasDisplayFormatModel<T>(instance: T, property: string): boolean {
    const prototype = Object.getPrototypeOf(instance);

    return !!prototype[`${DisplayFormatMetadata.hasDisplayFormat}${property}`];
}

export function getDisplayFormatModel<T>(instance: T, property: string): DisplayFormatModel {
    if (hasDisplayFormatModel(instance, property)) {
        const prototype = Object.getPrototypeOf(instance);

        const model = new DisplayFormatModel();

        model.format = prototype[`${DisplayFormatMetadata.displayFormat}${property}`];
        model.dataType = prototype[`${DisplayFormatMetadata.displayFormatDataType}${property}`] as DataType;

        return model;
    }

    return null;
}
