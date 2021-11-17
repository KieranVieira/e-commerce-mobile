import React from 'react';
import { ViewStyle } from 'react-native';

import { MainContainer, ButtonContainer, Count, Label } from './styles';

interface CounterProps {
  /** Optional extra styling to pass to container view */
  style?: ViewStyle;
  /** Count to be rendered, in the center of the counter */
  count: number,
  /** Fired when +/- buttons are pressed, with the respective quantity */
  onCountChange: (quantity: -1 | 1) => void;
}

/**
 * Counter that handles displaying passed count, as well as modifying the count
 * with =/- buttons on either side of the rendered count
 */
const Counter: React.FC<CounterProps> = ({ style, count, onCountChange }) => {
  return (
    <MainContainer style={style}>
      <ButtonContainer 
        testID='minus-button' 
        onPress={() => onCountChange(-1)}
      >
        <Label>-</Label>
      </ButtonContainer>
      <Count>{count}</Count>
      <ButtonContainer 
        testID='plus-button' 
        onPress={() => onCountChange(1)}
      >
        <Label>+</Label>
      </ButtonContainer>
    </MainContainer>
  )
}

export default Counter
