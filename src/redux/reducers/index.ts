import { combineReducers } from 'redux';

import products, { ProductsState } from "./products";
import cart, { CartState } from "./cart";

export interface StoreState {
  products: ProductsState,
  cart: CartState
}

export default combineReducers({
  products,
  cart
})