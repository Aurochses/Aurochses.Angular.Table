import {PaginatorModel} from '../models/paginator.model';

export function Paginator(show = true, itemsCount = [], showFirstLastButtons = true) {
  return function paginatorInternal(target: Object): void {
    Object.defineProperty(
      target,
      `${PaginatorMetadata.show}`,
      {
        value: show,
        enumerable: false,
        configurable: false
      }
    );

    Object.defineProperty(
      target,
      `${PaginatorMetadata.itemsCount}`,
      {
        value: itemsCount,
        enumerable: false,
        configurable: false
      }
    );

    Object.defineProperty(
      target,
      `${PaginatorMetadata.showFirstLastButtons}`,
      {
        value: showFirstLastButtons,
        enumerable: false,
        configurable: false
      }
    );
  };
}

export function getPaginatorModel<T>(instance: T): PaginatorModel {
  const prototype = Object.getPrototypeOf(instance);

  const model = new PaginatorModel();

  if (`${PaginatorMetadata.show}` in prototype.constructor && prototype.constructor[`${PaginatorMetadata.show}`] === true) {
    model.show = true;
  }

  if (`${PaginatorMetadata.itemsCount}` in prototype.constructor) {
    model.itemsCount = prototype.constructor[`${PaginatorMetadata.itemsCount}`];
  }

  if (`${PaginatorMetadata.showFirstLastButtons}` in prototype.constructor &&
    prototype.constructor[`${PaginatorMetadata.showFirstLastButtons}`] === true) {
    model.showFirstLastButtons = true;
  }

  return model;
}

export class PaginatorMetadata {
  public static show = `__paginator__show`;
  public static itemsCount = `__paginator__itemsCount`;
  public static showFirstLastButtons = `__paginator__showFirstLastButtons`;
}
