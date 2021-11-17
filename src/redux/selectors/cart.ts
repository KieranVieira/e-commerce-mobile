import { useSelector } from 'react-redux';

import { StoreState } from "../reducers";

export const getCart = () => useSelector((state: StoreState) => state.cart.cart);
export const getCartLoading = () => useSelector((state: StoreState) => state.cart.loadingCart);
