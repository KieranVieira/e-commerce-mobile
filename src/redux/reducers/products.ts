import { AnyAction } from 'redux';

import { 
  FETCH_PRODUCTS_START, 
  FETCH_PRODUCTS_SUCCESS, 
  FETCH_PRODUCTS_FAIL,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL
} from '../actions/products';

export interface Product {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: {
    count: number,
    rate: number,
  },
  title: string,
}

export interface ProductsState {
  products: Product[]
  categories: string[],
  isLoadingProducts: boolean,
  isLoadingCategories: boolean,
}

const initialState: ProductsState = {
  products: [],
  categories: [],
  isLoadingProducts: false,
  isLoadingCategories: false,
}

export default function reducer(state = initialState, action: AnyAction): ProductsState {
  switch(action.type) {
    case FETCH_PRODUCTS_START: {
      return {
        ...state,
        isLoadingProducts: true,
      }
    }

    case FETCH_PRODUCTS_SUCCESS: {
      const products = action.payload;

      return {
        ...state,
        isLoadingProducts: false,
        products
      }
    }
    
    case FETCH_PRODUCTS_FAIL: {
      const error = action.payload;

      return {
        ...state,
        isLoadingProducts: false,
      }
    }

    case FETCH_CATEGORIES_START: {
      return {
        ...state,
        isLoadingCategories: true,
      }
    }

    case FETCH_CATEGORIES_SUCCESS: {
      const categories = action.payload;

      return {
        ...state,
        isLoadingCategories: false,
        categories
      }
    }

    case FETCH_CATEGORIES_FAIL: {
      const error = action.payload;

      return {
        ...state,
        isLoadingCategories: false
      }
    }


    default: {
      return state
    }
  }
}