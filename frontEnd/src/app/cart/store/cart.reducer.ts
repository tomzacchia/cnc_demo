import * as CartActions from './cart.actions';
import { MainProduct } from '../../model/product.model';

export interface State {
  cartItems: MainProduct[],
}

const initialState: State = {
  cartItems: []
};

//: State
export function cartReducer(state = initialState, action: CartActions.CartActions): State {
  switch (action.type) {
    case CartActions.INCREMENT_QTY:
      const cartItemsIncrement = updatedCartItems(state, action.itemId, 'INCREMENT');
      return {
        ...state,
          cartItems: cartItemsIncrement
      }
    case CartActions.DECREMENT_QTY:
      const cartItemsDecrement = updatedCartItems(state, action.itemId, 'DECREMENT');
      return {
        ...state,
          cartItems: cartItemsDecrement
      }
    case CartActions.ADD_ITEM:
      return {
        ...state,
          cartItems: [ ...state.cartItems, action.product ]
      }
    case CartActions.DELETE_ITEM:
      const oldCartItems = deepCopy(state).cartItems;
      const itemDeletedIndex = oldCartItems.findIndex(
        item => item.id === action.itemId
      );
      oldCartItems.splice(itemDeletedIndex,1);
      const newCartItems = [...oldCartItems];
      return {
        ...state,
          cartItems: newCartItems
      }
    default:
      return state;
  }
}

// deep copy of state object
function deepCopy(state: State){
  return JSON.parse(JSON.stringify(state));
}

// find specific item for updating quantity
function updatedCartItems(state: State, itemId: string, updateType: string){
  const cartItems: MainProduct[] = deepCopy(state).cartItems;
  const oldItem = cartItems.find( item => item.id === itemId );
  const oldItemIndex = cartItems.findIndex( item => item.id === itemId );
  // update the cart item
  cartItems[oldItemIndex] = updateItemQuantity(oldItem, updateType);

  return cartItems;
}

// updating item quantity
function updateItemQuantity(item: MainProduct, updateType: string){
  const oldItem = item;
  let updateValue = 0;

  if ( updateType === 'INCREMENT' ){
    updateValue = 1;
  } else {
    updateValue = -1;
  }

  // update quantity of the item received
  const oldQuantity = oldItem.quantity;
  const newItem = {
    ...oldItem,
      quantity: oldQuantity + updateValue
  }

  return newItem;
}
