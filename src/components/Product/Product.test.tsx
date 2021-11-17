import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { render } from '../../utils/jest';
import Product from '.';

describe('Testing Component: <Product/>', () => {
  const defaultProps = {
    imageSrc: 'productImageSource',
    title: 'productTitle',
    description: 'productDescription',
    rating: 3.5,
    price: 24.22,
    cartCount: 0,
    onCartModify: jest.fn()
  };
  const minusButtonTestId = 'minus-button';
  const plusButtonTestId = 'plus-button';

  it('Should render with all props visible', () => {
    const { getByText } = render(<Product {...defaultProps} />);

    expect(getByText(defaultProps.title)).toBeDefined();
    expect(getByText(defaultProps.description)).toBeDefined();
    expect(getByText(`$${defaultProps.price.toFixed(2)}`)).toBeDefined();
    expect(getByText(String(defaultProps.rating))).toBeDefined();
  })

  it('Should render cartCount if passed', () => {
    const cartCount = 321;
    const { getByText } = render(<Product {...defaultProps} cartCount={cartCount} />);

    expect(getByText(String(cartCount))).toBeDefined();
  })

  it('Should call onCartModify with 1 when pressing buy button', () => {
    const { getByText } = render(<Product {...defaultProps} />);

    fireEvent.press(getByText('Buy'));

    expect(defaultProps.onCartModify).toBeCalledWith(1);
  })


  it('Should call onCartModify when pressing + icon when cartCount > 0 with -1', () => {
    const { getByTestId } = render(<Product {...defaultProps} cartCount={1}/>);

    fireEvent.press(getByTestId(minusButtonTestId));

    expect(defaultProps.onCartModify).toBeCalledWith(-1)
  });

  it('Should call onCartModify when pressing + icon when cartCount > 0 with 1', () => {
    const { getByTestId } = render(<Product {...defaultProps} cartCount={1}/>);

    fireEvent.press(getByTestId(plusButtonTestId));

    expect(defaultProps.onCartModify).toBeCalledWith(1);
  });
})
