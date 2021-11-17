import styled from 'styled-components/native';

import Input from '../../components/Input';
import ProductComponent from '../../components/Product';
import Search from '../../icons/Search';
import Filter from '../../icons/Filter';
import Button from '../../components/Button';
import BaseScreen from '../../components/Screen';

export const Screen = styled(BaseScreen)``;

export const FilterContainer = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 0 ${({theme}) => theme.spacing.md}px;
`;

export const SearchBar = styled(Input)`
  flex: 1;
`;

export const FilterButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.accent};
  border-radius: ${({theme}) => theme.radius.sm}px;
  margin-left: ${({theme}) => theme.spacing.xsm}px;
  width: 50px;
`;

export const FilterIcon = styled(Filter)``;

export const CategoryContainer = styled.ScrollView.attrs(({ theme }) => {
  return {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
      paddingHorizontal: theme.spacing.md
    }
  }
})`
  flex-direction: row;
  margin: ${({theme}) => theme.spacing.sm}px 0;
`;

interface CategoryButtonProps {
  isSelected: boolean
}
export const CategoryButton = styled(Button).attrs<CategoryButtonProps>(({ theme, isSelected }) => {
  return {
    textColor: !isSelected ? theme.colors.textMain : undefined,
  }
})`
  background-color: ${({theme, isSelected}) => isSelected ? theme.colors.secondaryAccent : theme.colors.main};
`;

export const ProductsContainer = styled.View`
  align-items: center;
  padding: 0 ${({theme}) => theme.spacing.md}px;
`;

export const Product = styled(ProductComponent)`
  margin-bottom: ${({theme}) => theme.spacing.md}px;
`;

export const Loading = styled.ActivityIndicator`
`;

export const SearchIcon = styled(Search).attrs(({ theme }) => ({
  stroke: theme.colors.textMain,
}))``;
