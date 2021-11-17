import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { getCart } from '../../redux/selectors/cart';
import { CartItem } from '../../redux/reducers/cart';
import { 
  Screen, 
  ProductsContainer, 
  CartProduct, 
  TotalContainer, 
  TotalTop,
  TotalItem,
  Checkout
} from './styles';
import { addToCart, removeFromCart } from '../../redux/actions/cart';

/**
 * Cart screen, shows the user whats currently in their cart, along with
 * a total, and checkout button
 */
const Cart = () => {
  const dispatch = useDispatch();
  const cart = getCart();

  /**
   * Handles cart modification from product, has ability to remove
   * 
   * @param product - Product to be modified
   * @param quantity - Number that determines whether to decrement or increment
   */
   const handleCartModification = useCallback((product: CartItem, quantity: -1 | 1) => {
    if (quantity === 1) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product));
    }
  }, []);

  /**
   * Handles rendering product to be rendered in the cart product list
   * 
   * @param product - Product to be rendered
   */
  const renderProduct = useCallback((product: CartItem) => {
    return (
      <CartProduct
        title={product.title}
        price={product.price}
        cartCount={product.quantity}
        imageSrc={product.image}
        onCartModify={(quantity) => handleCartModification(product, quantity)}
      />
    )
  }, [handleCartModification]);

  /**
   * Array containing products to render, count of all item quantities in the
   * cart, as well as the total price of the cart
   */
  const [productsToRender, cartCount, total] = useMemo(() => {
    const productsToRender = Object.values(cart);
    let cartCount = 0;
    let total = 0;

    for (const product of productsToRender) {
      cartCount += product.quantity;
      total += product.price * product.quantity;
    }

    return [productsToRender, cartCount, total];
  }, [cart]);

  return (
    <Screen headerText='Your Cart' subHeaderText={`${cartCount} item(s)`}>
      <ProductsContainer>
        {productsToRender.map(renderProduct)}
      </ProductsContainer>

      <TotalContainer>
        <TotalTop>
          <TotalItem>Total</TotalItem>
          <TotalItem>{`$${total.toFixed(2)}`}</TotalItem>
        </TotalTop>
        <Checkout label="Checkout" />
      </TotalContainer>
    </Screen>
  )
}

export default Cart
