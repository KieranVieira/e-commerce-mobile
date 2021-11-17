import { Dispatch } from 'redux';
import axios from 'axios';

const api = 'https://fakestoreapi.com';

export const FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";

/** 
 * Dispatches async thunk actions to fetch products, and handle
 * fetching state
 * 
 * @param category - Category to fetch from
 * @param filter - Accepting only 'asc' or 'desc', passed to the store api to filter results
 */
export const fetchProducts = (category?: string, filter?: 'asc' | 'desc') => (dispatch: Dispatch) => {
  let uri = `${api}/products`;

  if (category) uri += `/category/${category}`;
  if (filter) uri += `?sort=${filter}`;

  dispatch({ type: FETCH_PRODUCTS_START });

  axios.get(uri)
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

export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAIL = "FETCH_CATEGORIES_FAIL";

/** 
 * Dispatches async thunk actions to fetch categories, and handle
 * fetching state
 */
export const fetchCategories = () => (dispatch: Dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_START });

  axios.get(`${api}/products/categories`)
    .then(res => {
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_CATEGORIES_FAIL,
        payload: err
      })
    })
}