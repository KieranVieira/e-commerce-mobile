import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useActionSheet } from '@expo/react-native-action-sheet';

import { fetchCategories, fetchProducts } from '../../redux/actions/products';
import { Product as IProduct } from '../../redux/reducers/products';
import { getCategories, getProducts, getProductsLoading } from '../../redux/selectors/products';
import { capitalize } from '../../utils/general';
import { 
  MainContainer, 
  Header, 
  SubHeader, 
  FilterContainer, 
  FilterButton,
  FilterIcon,
  SearchBar, 
  SearchIcon,
  ScrollContainer,
  ProductsContainer,
  Product,
  CategoryContainer,
  CategoryButton,
  Loading
} from './styles';

/**
 * Shop screen that renders search, filters, categories, and allows the user
 * to add products to their cart from the rendered product list
 */
const Shop = () => {
  const dispatch = useDispatch();
  const products = getProducts();
  const { showActionSheetWithOptions } = useActionSheet();
  const productsLoading = getProductsLoading();
  const categories = getCategories();
  const [searchValue, setSearchValue] = useState('');
  const [productsToRender, setProductsToRender] = useState<IProduct[]>([]);
  const [category, setCategory] = useState('');
  const [filter, setFilter] = useState('asc');

  /**
   * Handles showing action sheet with sorting options
   */
  const handlePressFilter = useCallback(() => {
    showActionSheetWithOptions({
      options: ['Sort Ascending', 'Sort Descending', 'Cancel'],
      cancelButtonIndex: 2,
    }, i => {
      const newFilter = i === 0 ? 'asc' : 'desc';
      if (filter !== newFilter) {
        setFilter(!i ? 'asc' : 'desc')
      }
    })
  }, [showActionSheetWithOptions, filter]);

  /**
   * Handles pressing on category selection, setting state variables
   * used to fetch new results
   * 
   * @param item - Item key that was selected
   */
  const handlePressCategory = useCallback((item: string) => {
    if (category !== item) {
      setCategory(item);
      setProductsToRender([]);
    }
  }, [category]);

  /**
   * Handles rendering category selection
   * 
   * @param item - Item key to be rendered
   */
  const renderCategory = useCallback((item: string) => {
    const isSelected = category === item;

    return (
      <CategoryButton
        key={item}
        isSelected={isSelected}
        onPress={() => handlePressCategory(item)}
        label={capitalize(item)}
      />
    )
  }, [category, handlePressCategory]);

  /**
   * Handles rendering product in list of products
   * 
   * @param product - Product to be rendered
   */
  const renderProduct = useCallback((item: IProduct) => {
    return (
      <Product
        key={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        rating={item.rating.rate}
        imageSrc={item.image}
      />
    )
  }, []);

  /** 
   * Handles fetching products with most recent category and filter
   * options selected
   */
  useEffect(() => {
    dispatch(fetchProducts(category, filter));
  }, [category, filter]);

  /**
   * Handles filtering products by search value
   */
  useEffect(() => {
    if (searchValue) {
      const newProducts = products.filter((product) => {
        return product.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
      });

      setProductsToRender(newProducts);
    } else {
      setProductsToRender(products);
    }
  }, [searchValue, products])

  /**
   * Handles fetching categories
   */
  useEffect(() => {
    dispatch(fetchCategories());
  }, [])

  return (
    <ScrollContainer keyboardDismissMode='on-drag'>
      <MainContainer>
        <Header>Amazing Products</Header>
        <SubHeader>Take a Look!</SubHeader>
        <FilterContainer>
          <SearchBar 
            icon={<SearchIcon />}
            placeholder="Search" 
            value={searchValue} 
            onChange={setSearchValue} 
          />
          <FilterButton onPress={handlePressFilter}>
            <FilterIcon/>
          </FilterButton>
        </FilterContainer>
        <CategoryContainer>
          <CategoryButton 
            label="All" 
            isSelected={!category}
            onPress={() => handlePressCategory('')}
          />
          {categories.map(renderCategory)}
        </CategoryContainer>
        <ProductsContainer>
          {productsLoading ? (
            <Loading />
          ) : (
            productsToRender.map(renderProduct)
          )}
        </ProductsContainer>
      </MainContainer>
    </ScrollContainer>
  )
}

export default Shop;
