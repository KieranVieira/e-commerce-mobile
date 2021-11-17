import React, { createRef } from 'react';
import { ViewStyle, TextInput as RNInput } from 'react-native';

import { InputContainer, TextInput } from './styles';

interface Props {
  /** (Optional) Extra styles to be passed to the input contianer */
  style?: ViewStyle;
  /** Icon to be rendered in the search bar on the left */
  icon?: JSX.Element
  /** Placeholder text to render when input has no value */
  placeholder: string,
  /** Current value of the input */
  value: string,
  /** Gets fired with current input value when input changes */
  onChange: (text: string) => void;
}

/** 
 * Common component used for inputs throughout the app
 */
const Input: React.FC<Props> = ({ style, icon, value, placeholder, onChange }) => {
  const inputRef = createRef<RNInput>();

  return (
    <InputContainer onPress={() => inputRef?.current?.focus()} style={style}>
      {icon}
      <TextInput
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        hasIcon={Boolean(icon)}
      />
    </InputContainer>
  )
}

export default Input;
