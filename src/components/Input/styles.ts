import styled from 'styled-components/native';

export const InputContainer = styled.Pressable`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.accent};
  border-radius: ${({theme}) => theme.radius.sm}px;
  padding: ${({theme}) => theme.spacing.sm}px;
`;

interface TextInputProps {
  hasIcon: boolean;
}

export const TextInput = styled.TextInput<TextInputProps>`
  flex: 1;
  font-size: ${({theme}) => theme.text.sm}px;
  margin-left: ${({hasIcon, theme}) => hasIcon ? `${theme.spacing.xsm}px` : 0};
`;