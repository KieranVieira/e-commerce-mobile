import React from 'react';
import { ViewStyle } from 'react-native';

import { 
  MainContainer, 
  Rating,
  StarIcon,
  RatingText,
  Image, 
  RightContent, 
  Title, 
  Description, 
  BottomRow, 
  Price,
  BuyButton
} from './styles';

interface Props {
  /** Additional style to be passed to the container component */
  style?: ViewStyle;
  /** Image of the product to be rendered along side the details */
  imageSrc: string,
  /** Title of the product */
  title: string,
  /** Price of the product */
  price: number,
  /** Rating of the product */
  rating: number,
  /** Description of the product (Could be truncated depending on length) */
  description: string,
}

/** 
 * Renders the product details associated, and allows the user to add and remove
 * products from their cart using onAdd/onRemove/isInCart props
 */
const Product: React.FC<Props> = ({ style, imageSrc, title, description, rating, price }) => {
  return (
    <MainContainer style={style}>
      <Rating>
        <StarIcon/>
        <RatingText>
          {rating}
        </RatingText>
      </Rating>
      <Image source={{ uri: imageSrc }} resizeMode='contain' />
      <RightContent>
        <Title numberOfLines={2}>{title}</Title>
        <Description numberOfLines={3}>{description}</Description>
        <BottomRow>
          <Price>
            ${price.toFixed(2)}
          </Price>
          <BuyButton
            onPress={() => {}}
            label="Buy"
          />
        </BottomRow>
      </RightContent>
    </MainContainer>
  )
}

export default Product
