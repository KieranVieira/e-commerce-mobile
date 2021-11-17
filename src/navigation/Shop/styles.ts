import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../../components/Input';
import ProductComponent from '../../components/Product';
import Search from '../../icons/Search';

export const MainContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0 ${({theme}) => theme.spacing.md}px;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.main};
`;

export const Header = styled.Text`
  color: ${({theme}) => theme.colors.textMain};
  font-size: ${({theme}) => theme.text.xmd}px;
  font-weight: 700;
  margin-bottom: ${({theme}) => theme.spacing.xsm}px;
  margin-top: ${({theme}) => theme.spacing.md}px;
`;

export const SubHeader = styled.Text`
  color: ${({theme}) => theme.colors.textAccent};
  font-size: ${({theme}) => theme.text.md}px;
  margin-bottom: ${({theme}) => theme.spacing.md}px;
`;

export const FilterContainer = styled.View`
  flex: 1;
`;

export const SearchBar = styled(Input)`
  margin-bottom: ${({theme}) => theme.spacing.md}px;
`;

export const ProductsContainer = styled.View``;

export const Product = styled(ProductComponent)`
  margin-bottom: ${({theme}) => theme.spacing.md}px;
`;

export const SearchIcon = styled(Search).attrs(({ theme }) => ({
  stroke: theme.colors.textMain,
}))``;


