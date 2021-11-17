import { AnyAction } from 'redux';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../actions/cart';

export interface CartItem {
  image: string,
  title: string,
  price: number,
  quantity: number,
}

export interface CartState {
  cart: Record<string, CartItem>,
}

const initialState: CartState = {
  cart: {},
}

export default function reducer(state = initialState, action: AnyAction): CartState {
  switch(action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const newCart = { ...state.cart };
      
      if (newCart[product.id]) {
        newCart[product.id].quantity += 1
      } else {
        newCart[product.id] = {
          image: product.image,
          title: product.title,
          price: product.price,
          quantity: 1
        }
      }

      return {
        ...state,
        cart: newCart
      }
    }

    case REMOVE_FROM_CART: {
      const product = action.payload;
      const newCart = { ...state.cart };

      if (newCart[product.id].quantity === 1) {
        delete newCart[product.id]
      } else {
        newCart[product.id].quantity -= 1
      }

      return {
        ...state,
        cart: newCart
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}