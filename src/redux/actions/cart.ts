import { Product } from "../reducers/products";

export const ADD_TO_CART = "ADD_TO_CART";

/**
 * Dispatches async thunk actions to add to cart
 * 
 * @param product - Product to add to cart
 */
export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product
})

export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export const removeFromCart = (product: Product) => ({
  type: REMOVE_FROM_CART,
  payload: product
})