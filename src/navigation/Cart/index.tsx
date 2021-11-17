import React, { useCallback, useMemo } from 'react';
import { Text } from 'react-native';

import { getProducts } from '../../redux/selectors/products';
import { getCart } from '../../redux/selectors/cart';
import { Screen } from './styles';
import { Product as IProduct } from '../../redux/reducers/products';

/**
 * Cart screen, shows the user
 */
const Cart = () => {
  const products = getProducts();
  const cart = getCart();

  const renderProduct = useCallback((product: IProduct) => {
    return <Text>{product.title} {cart[product.id]}</Text>
  }, [cart]);

  const [productsToRender, cartCount] = useMemo(() => {
    const productsToRender = products.filter(p => cart[p.id]);
    const cartCount = Object.values(cart).reduce((acc, a) => acc + a, 0);
    
    return [productsToRender, cartCount];
  }, [products, cart]);

  return (
    <Screen headerText='Your Cart' subHeaderText={`${cartCount} item(s)`}>
      {productsToRender.map(renderProduct)}
    </Screen>
  )
}

export default Cart
