import React from 'react';
import { ViewStyle } from 'react-native';

import { ButtonContainer, Label } from './styles';

interface Props {
  /** Extra style to pass to the container view */
  style?: ViewStyle;
  /** Handles press event when button is pressed */
  onPress?: () => void;
  /** Pass true if button should be disabled */
  disabled?: boolean;
  /** Label of the button */
  label?: string,
  /** Override for text color */
  textColor?: string,
}

/**
 * Custom button component to be used anywhere where buttons are needed
 */
const Button: React.FC<Props> = ({ style, onPress, disabled, label, textColor }) => {
  return (
    <ButtonContainer 
      style={style} 
      onPress={onPress} 
      disabled={disabled}
    >
      <Label textColor={textColor} >{label}</Label>
    </ButtonContainer>
  )
}

export default Button
