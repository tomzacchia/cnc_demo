import { Action } from '@ngrx/store';
import { MainProduct } from '../../model/product.model';

export const ADD_ITEM = 'ADD_ITEM';
export const INCREMENT_QTY = 'INCREMENT_QTY';
export const DECREMENT_QTY = 'DECREMENT_QTY';
export const DELETE_ITEM = 'DELETE_ITEM';

export class AddItem implements Action {
  readonly type = ADD_ITEM;
  constructor( public product: MainProduct ){}
}
export class IncrementQty implements Action{
  readonly type = INCREMENT_QTY;
  constructor( public itemId: string ){}
}
export class DecrementQty implements Action{
  readonly type = DECREMENT_QTY;
  constructor( public itemId: string ) {}
}
export class DeleteItem implements Action{
  readonly type = DELETE_ITEM;
  constructor( public itemId: string ) {}
}

export type CartActions =
  AddItem |
  IncrementQty |
  DecrementQty |
  DeleteItem;
