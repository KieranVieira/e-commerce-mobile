import styled from 'styled-components/native';

import Star from '../../icons/Star';
import Button from '../Button';

export const MainContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.accent};
  border-radius: ${({theme}) => theme.radius.lg}px;
  padding: ${({theme}) => theme.spacing.md}px;
`;

export const Rating = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
  bottom: 0px;
  left: 0px;
  min-width: 70px;
  padding: ${({theme}) => theme.spacing.xsm}px;
  background-color: ${({theme}) => theme.colors.secondaryAccent};
  border-bottom-left-radius: ${({theme}) => theme.radius.md}px;
  border-top-right-radius: ${({theme}) => theme.radius.md}px;
`;

export const StarIcon = styled(Star).attrs(({ theme }) => {
  return {
    stroke: theme.colors.orange,
    fill: theme.colors.orange
  }
})`
  margin-right: ${({theme}) => theme.spacing.xsm / 2}px;
`;

export const RatingText = styled.Text`
  font-size: ${({theme}) => theme.text.sm}px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.accent};
`;

export const Image = styled.Image`
  height: 115px;
  width: 100px;
`;

export const RightContent = styled.View`
 flex: 1;
 margin-left: ${({theme}) => theme.spacing.sm}px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.text.sm}px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.textMain};
  margin-bottom: ${({theme}) => theme.spacing.xsm}px;
`;

export const Description = styled.Text`
  font-size: ${({theme}) => theme.text.xsm}px;
  line-height: ${({theme}) => theme.text.md}px;
  color: ${({theme}) => theme.colors.textAccent};

`;

export const BottomRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({theme}) => theme.spacing.sm}px;
`;

export const Price = styled.Text`
  font-size: ${({theme}) => theme.text.sm}px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.textMain};
`;

export const BuyButton = styled(Button)`

`;