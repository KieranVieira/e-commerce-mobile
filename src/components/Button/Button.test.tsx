import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { render } from '../../utils/jest';
import Button from './';

describe('Testing Component: <Button/>', () => {
  const defaultProps = {
    onPress: jest.fn(),
    label: 'buttonLabel'
  }
  it('Should render label and fire press event on press', () => {
    const { getByText } = render(<Button {...defaultProps} />);

    fireEvent.press(getByText(defaultProps.label))

    expect(defaultProps.onPress).toHaveBeenCalledTimes(1);
  });

  it('Should not trigger button press when button is disabled', () => {
    const { getByText } = render(<Button {...defaultProps} disabled />);

    fireEvent.press(getByText(defaultProps.label))

    // Checking that its only called once from previous test
    expect(defaultProps.onPress).toHaveBeenCalledTimes(1);
  });
})
