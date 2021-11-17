import styled from "styled-components/native";

export const MainContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  padding: 0 ${({theme}) => theme.spacing.sm}px;
  background-color: ${({theme}) => theme.colors.secondaryAccent};
  border-radius: ${({theme}) => theme.radius.md}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 25px;
  height: 20px;
  align-items: center;
`;

export const Label = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.text.md}px;
  line-height: ${({theme}) => theme.text.md}px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.textSecondaryAccent};
`;

export const Count = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.text.sm}px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.textSecondaryAccent};
`;
