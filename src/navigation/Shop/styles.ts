import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../../components/Input';
import ProductComponent from '../../components/Product';
import Search from '../../icons/Search';
import Filter from '../../icons/Filter';
import Button from '../../components/Button';

export const MainContainer = styled(SafeAreaView)`
  flex: 1;
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
  padding: 0 ${({theme}) => theme.spacing.md}px;
`;

export const SubHeader = styled.Text`
  color: ${({theme}) => theme.colors.textAccent};
  font-size: ${({theme}) => theme.text.md}px;
  margin-bottom: ${({theme}) => theme.spacing.md}px;
  padding: 0 ${({theme}) => theme.spacing.md}px;
`;

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
