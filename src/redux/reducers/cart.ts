import { AnyAction } from 'redux';

import {
  MODIFY_CART_START,
  MODIFY_CART_SUCCESS,
  MODIFY_CART_FAIL
} from '../actions/cart';

export interface CartState {
  cart: Record<string, number>,
  loadingCartProductId: number | undefined,
}

const initialState: CartState = {
  cart: {},
  loadingCartProductId: undefined,
}

export default function reducer(state = initialState, action: AnyAction): CartState {
  switch(action.type) {
    case MODIFY_CART_START: {
      return {
        ...state,
        loadingCartProductId: action.payload
      }
    }

    case MODIFY_CART_SUCCESS: {
      const { productId, remove } = action.payload;
      const newCart = { ...state.cart }

      if (newCart[productId]) {
        const newValue = remove ? newCart[productId] - 1 : newCart[productId] + 1 
        newCart[productId] = newValue;
      } else {
        newCart[productId] = 1;
      }

      return {
        ...state,
        loadingCartProductId: undefined,
        cart: newCart
      }
    }

    case MODIFY_CART_FAIL: {
      return {
        ...state,
        loadingCartProductId: undefined
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}