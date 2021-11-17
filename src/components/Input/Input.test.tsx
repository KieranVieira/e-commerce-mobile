import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { render } from '../../utils/jest';
import Input from '.';

describe('Testing Component: <Input/>', () => {
  const defaultProps = {
    placeholder: 'somePlaceholderText',
    value: 'inputValue',
    onChange: jest.fn()
  }

  it('Should render with passed value', () => {
    const { getByDisplayValue } = render(<Input {...defaultProps} />);

    expect(getByDisplayValue(defaultProps.value)).toBeDefined();
  });

  it('Should show placeholder when value is empty', () => {
    const { getByPlaceholderText } = render(<Input {...defaultProps} value={''} />);

    expect(getByPlaceholderText(defaultProps.placeholder)).toBeDefined();
  });

  it('Should fire onChange when input changes', () => {
    const { getByDisplayValue } = render(<Input {...defaultProps}/>)

    fireEvent.changeText(getByDisplayValue(defaultProps.value))

    expect(defaultProps.onChange).toBeCalledTimes(1);
  });
})
