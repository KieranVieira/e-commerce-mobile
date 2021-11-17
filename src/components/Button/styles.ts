import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.secondaryAccent};
  padding: ${({theme}) => `${theme.spacing.sm}px ${theme.spacing.md}px`};
  border-radius: ${({theme}) => theme.radius.md}px;
`;

export const Label = styled.Text`
  font-size: ${({theme}) => theme.text.xsm}px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.textSecondaryAccent};
`;