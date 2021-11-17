import styled from 'styled-components/native';

import BaseScreen from '../../components/Screen';
import CartProductComponent from '../../components/Product';
import Button from '../../components/Button';

export const Screen = styled(BaseScreen)`
  
`;

export const ProductsContainer = styled.View`
  align-items: center;
  padding: 0 ${({theme}) => theme.spacing.md}px;
`;

export const CartProduct = styled(CartProductComponent)`
  margin-bottom: ${({theme}) => theme.spacing.md}px;
`;

export const TotalContainer = styled.View`
  margin: 0 ${({theme}) => theme.spacing.md}px;
  border: 2px dashed ${({theme}) => theme.colors.textAccent};
  border-radius: ${({theme}) => theme.radius.lg}px;
  padding: ${({theme}) => theme.spacing.md}px;
`;

export const TotalTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalItem = styled.Text`
  font-size: ${({theme}) => theme.text.sm}px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.textMain};
  margin-bottom: ${({theme}) => theme.spacing.xsm}px;
`;

export const Checkout = styled(Button)`
  margin-top: ${({theme}) => theme.spacing.xsm}px;
`;