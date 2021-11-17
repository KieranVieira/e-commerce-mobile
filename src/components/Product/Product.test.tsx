import React from 'react';

import { render } from '../../utils/jest';
import Product from '.';

describe('Testing Component: <Product/>', () => {
  const defaultProps = {
    imageSrc: 'productImageSource',
    title: 'productTitle',
    description: 'productDescription',
    rating: 3.5,
    price: 24.22
  };

  it('Should render with all props visible', () => {
    const { getByText } = render(<Product {...defaultProps} />);

    expect(getByText(defaultProps.title)).toBeDefined();
    expect(getByText(defaultProps.description)).toBeDefined();
    expect(getByText(`$${defaultProps.price.toFixed(2)}`)).toBeDefined();
    expect(getByText(String(defaultProps.rating))).toBeDefined();
  })
})
