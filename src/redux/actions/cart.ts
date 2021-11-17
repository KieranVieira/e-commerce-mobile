import { Dispatch } from 'redux';
import axios from 'axios';

const api = 'https://fakestoreapi.com';

export const MODIFY_CART_START = "MODIFY_CART_START";
export const MODIFY_CART_SUCCESS = "MODIFY_CART_SUCCESS";
export const MODIFY_CART_FAIL = "MODIFY_CART_FAIL";

/**
 * Dispatches async thunk actions to modify cart, and handle loading, passing
 * remove will remove the product id passed if true
 * 
 * @param productId - Identifier of the product to modify
 * @param remove - (Optional) If passed value is true, will remove from cart, defaults to adding to cart
 */
export const modifyCart = (productId: number, remove?: boolean) => (dispatch: Dispatch) => {
  const payload = {
    userId: "5",
    date: new Date().toLocaleDateString(),
    products: [{ productId, quantity: remove ? 0 : 1 }]
  }

  dispatch({ type: MODIFY_CART_START });

  axios.post(`${api}/carts`, payload)
    .then(res => {
      dispatch({ 
        type: MODIFY_CART_SUCCESS,
        payload: {
          data: res.data,
          productId,
          remove,
        }
      });
    })
    .catch(err => {
      dispatch({ 
        type: MODIFY_CART_FAIL,
        payload: err
      });
    })
}