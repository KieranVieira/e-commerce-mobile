import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { fetchProducts } from '../../redux/actions/products';
import { Product as IProduct } from '../../redux/reducers/products';
import { getProducts } from '../../redux/selectors/products';
import { 
  MainContainer, 
  Header, 
  SubHeader, 
  FilterContainer, 
  SearchBar, 
  SearchIcon,
  ScrollContainer,
  ProductsContainer,
  Product
} from './styles';

/**
 * Shop screen that renders search, filters, categories, and allows the user
 * to add products to their cart from the rendered product list
 */
const Shop = () => {
  const dispatch = useDispatch();
  const products = getProducts();
  const [searchValue, setSearchValue] = useState('');

  const renderProduct = useCallback((item: IProduct, index: number) => {
    return (
      <Product
        title={item.title}
        description={item.description}
        price={item.price}
        rating={item.rating.rate}
        imageSrc={item.image}
      />
    )
  }, []);

  /** 
   * Handles fetching products with most recent search value, category, and sort
   * options selected
   */
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  return (
    <ScrollContainer>
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
        </FilterContainer>
        <ProductsContainer>
          {products.map(renderProduct)}
        </ProductsContainer>
      </MainContainer>
    </ScrollContainer>
  )
}

export default Shop;
