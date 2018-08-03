import {SortModel} from '../models/sort.model';

class SortMetadata {
  public static sort = '__sort__';
}

export function Sort(sort = true) {
  return function sortInternal(target: Object, property: string | symbol): void {
    Object.defineProperty(
      target,
      `${SortMetadata.sort}${property.toString()}`,
      {
        value: sort,
        enumerable: false,
        configurable: false
      }
    );
  };
}

export function isSort<T>(instance: T, property: string): boolean {
  const prototype = Object.getPrototypeOf(instance);

  return !!prototype[`${SortMetadata.sort}${property}`];
}


export function getSortModel<T>(instance: T, property: string): SortModel {
  const prototype = Object.getPrototypeOf(instance);

  const model = new SortModel();

  if (`${SortMetadata.sort}` in prototype.constructor && prototype.constructor[`${SortMetadata.sort}${property}`] === true) {
    model.sort = true;
  }

  return model;
}
