import { Dispatch } from 'redux';
import axios from 'axios';

const api = 'https://fakestoreapi.com/products'

export const FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";
export const fetchProducts = (category?: string, filter?: string) => (dispatch: Dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_START });

  axios.get(api)
    .then(res => {
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_PRODUCTS_FAIL,
        payload: err
      })
    })

}