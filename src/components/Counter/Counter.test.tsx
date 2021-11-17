import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { render } from '../../utils/jest';
import Counter from './';

describe('Testing Component <Counter/>', () => {
  const defaultProps = {
    count: 12,
    onCountChange: jest.fn()
  }
  const minusButtonTestId = 'minus-button';
  const plusButtonTestId = 'plus-button';

  it('Should render correctly with props', () => {
    const { getByText } = render(<Counter {...defaultProps}/>);

    expect(getByText(String(defaultProps.count))).toBeDefined();
  })

  it('Should call onCountChange with -1 when pressing -', () => {
    const { getByTestId } = render(<Counter {...defaultProps}/>);

    fireEvent.press(getByTestId(minusButtonTestId))

    expect(defaultProps.onCountChange).toBeCalledWith(-1)
  });

  it('Should call onCountChange with 1 when pressing +', () => {
    const { getByTestId } = render(<Counter {...defaultProps}/>);

    fireEvent.press(getByTestId(plusButtonTestId))

    expect(defaultProps.onCountChange).toBeCalledWith(1)
  });
})
