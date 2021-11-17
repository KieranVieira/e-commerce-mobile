import React from 'react';
import { Text } from 'react-native';

import { render } from '../../utils/jest';
import Screen from '.';

describe('Testing Component: <Screen/>', () => {
  const defaultProps = {
    headerText: 'headerText',
    subHeaderText: 'subHeaderText'
  }

  it('Should render with header and sub header visible', () => {
    const { getByText } = render(<Screen {...defaultProps}/>);

    expect(getByText(defaultProps.headerText)).toBeDefined();
    expect(getByText(defaultProps.subHeaderText)).toBeDefined();
  });

  it('Should properly with children', () => {
    const childrenText = 'childrenText';
    const { getByText } = render(<Screen {...defaultProps}><Text>{childrenText}</Text></Screen>);

    expect(getByText(childrenText)).toBeDefined();
  })
})
