import { combineReducers } from 'redux';

import products, { ProductsState } from "./products";

export interface StoreState {
  products: ProductsState
}

export default combineReducers({
  products
})