import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useTheme } from 'styled-components/native';

import { fetchCategories, fetchProducts } from '../../redux/actions/products';
import { Product as IProduct } from '../../redux/reducers/products';
import { getCategories, getProducts, getProductsLoading } from '../../redux/selectors/products';
import { addToCart, removeFromCart } from '../../redux/actions/cart';
import { getCart } from '../../redux/selectors/cart';
import { capitalize } from '../../utils/general';
import { 
  Screen,
  FilterContainer, 
  FilterButton,
  FilterIcon,
  SearchBar, 
  SearchIcon,
  ProductsContainer,
  Product,
  CategoryContainer,
  CategoryButton,
  Loading
} from './styles';

type FilterType = 'asc'|'desc';

/**
 * Shop screen that renders search, filters, categories, and allows the user
 * to add products to their cart from the rendered product list
 */
const Shop = () => {
  const { showActionSheetWithOptions } = useActionSheet();
  const dispatch = useDispatch();
  const theme = useTheme();
  const products = getProducts();
  const productsLoading = getProductsLoading();
  const cart = getCart();
  const categories = getCategories();
  const [searchValue, setSearchValue] = useState('');
  const [productsToRender, setProductsToRender] = useState<IProduct[]>([]);
  const [category, setCategory] = useState('');
  const [filter, setFilter] = useState<FilterType>('asc');

  /**
   * Handles cart modification from product, has ability to remove
   */
  const handleCartModification = useCallback((product: IProduct, quantity?: -1 | 1) => {
    if (quantity === 1) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product));
    }
  }, []);

  /**
   * Handles showing action sheet with sorting options
   */
  const handlePressFilter = useCallback(() => {
    const options = ['Sort Ascending', 'Sort Descending', 'Cancel'];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
    }, i => {
      const isCancel = i === cancelButtonIndex
      const newFilter = i === 0 ? 'asc' : 'desc';
      if (!isCancel && filter !== newFilter) {
        setFilter(newFilter);
        setProductsToRender([]);
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
  const renderCategory = useCallback(({ item }: { item: unknown, index: number }) => {
    const currentCategory = item as string;
    const isSelected = category === currentCategory;

    return (
      <CategoryButton
        key={currentCategory}
        isSelected={isSelected}
        onPress={() => handlePressCategory(currentCategory)}
        label={capitalize(currentCategory)}
      />
    )
  }, [category, handlePressCategory]);

  /**
   * Handles rendering product in list of products
   * 
   * @param product - Product to be rendered
   */
  const renderProduct = useCallback((item: IProduct) => {
    const cartCount = cart[item.id]?.quantity ?? 0;

    return (
      <Product
        key={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        rating={item.rating.rate}
        imageSrc={item.image}
        cartCount={cartCount}
        onCartModify={(quantity) => handleCartModification(item, quantity)}
      />
    )
  }, [handleCartModification, cart]);

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
    <Screen headerText='Amazing Products' subHeaderText='Take a Look!'>
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
      <CategoryContainer
        data={categories}
        renderItem={renderCategory}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <CategoryButton 
            label="All" 
            isSelected={category === ''}
            onPress={() => handlePressCategory('')}
          />
        }
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.md
        }}
      />
      <ProductsContainer>
        {productsLoading ? (
          <Loading 
            size="large" 
            color={theme.colors.secondaryAccent}
          />
        ) : (
          productsToRender.map(renderProduct)
        )}
      </ProductsContainer>
    </Screen>
  )
}

export default Shop;
