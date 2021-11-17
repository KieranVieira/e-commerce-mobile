import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.secondaryAccent};
  padding: ${({theme}) => `${theme.spacing.sm}px ${theme.spacing.md}px`};
  border-radius: ${({theme}) => theme.radius.md}px;
`;

interface LabelProps {
  textColor?: string
}
export const Label = styled.Text<LabelProps>`
  text-align: center;
  font-size: ${({theme}) => theme.text.xsm}px;
  font-weight: 500;
  color: ${({theme, textColor}) => textColor ?? theme.colors.textSecondaryAccent};
`;