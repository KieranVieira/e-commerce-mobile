import { useSelector } from 'react-redux';

import { StoreState } from "../reducers";

export const getProducts = () => useSelector((state: StoreState) => state.products.products);
export const getProductsLoading = () => useSelector((state: StoreState) => state.products.isLoadingProducts);

export const getCategories = () => useSelector((state: StoreState) => state.products.categories);
export const getCategoriesLoading = () => useSelector((state: StoreState) => state.products.isLoadingCategories);