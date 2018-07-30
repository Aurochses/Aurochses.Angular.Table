import { SelectModel } from '../models/select.model';

class SelectMetadata {
    public static allowSelect = `__select__allowSelect`;
    public static allowMultiSelect = `__select__allowMultiSelect`;
}

export function Select(allowMultiSelect = true) {
    return function selectInternal(target: Object): void {
        Object.defineProperty(
            target,
            `${SelectMetadata.allowSelect}`,
            {
                value: true,
                enumerable: false,
                configurable: false
            }
        );

        Object.defineProperty(
            target,
            `${SelectMetadata.allowMultiSelect}`,
            {
                value: allowMultiSelect,
                enumerable: false,
                configurable: false
            }
        );
    };
}

export function getSelectModel<T>(instance: T): SelectModel {
    const prototype = Object.getPrototypeOf(instance);

    const model = new SelectModel();

    if (
        `${SelectMetadata.allowSelect}` in prototype.constructor
        && prototype.constructor[`${SelectMetadata.allowSelect}`] === true
    ) {
        model.allowSelect = true;
    }

    if (
        `${SelectMetadata.allowMultiSelect}` in prototype.constructor
        && prototype.constructor[`${SelectMetadata.allowMultiSelect}`] === true
    ) {
        model.allowMultiSelect = true;
    }

    return model;
}
