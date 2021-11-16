import React, { useState } from 'react';
import Input from '../../components/Input';

import { MainContainer, Header, SubHeader, FilterContainer } from './styles';

const Shop = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <MainContainer>
      <Header>Amazing Products</Header>
      <SubHeader>Perfect Choice!</SubHeader>
      <FilterContainer>
        <Input placeholder="Search" value={searchValue} onChange={setSearchValue} />
      </FilterContainer>
    </MainContainer>
  )
}

export default Shop;
