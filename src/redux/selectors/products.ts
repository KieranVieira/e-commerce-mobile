import { useSelector } from 'react-redux';

import { StoreState } from "../reducers";

export const getProducts = () => useSelector((state: StoreState) => state.products.products);
export const getProductsLoading = () => useSelector((state: StoreState) => state.products.isLoadingProducts);