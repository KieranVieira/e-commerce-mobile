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
  ModifyContainer,
  CountButtons,
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
  /** Count of this product currently in the cart */
  cartCount: number,
  /** Fired when buy is pressed, or +/- component is modified, -1 if remove, +1 if add */
  onCartModify: (quantity: 1 | -1) => void;
  /** Rating of the product */
  rating?: number,
  /** Description of the product (Could be truncated depending on length) */
  description?: string,
}

/** 
 * Renders the product details associated, and allows the user to add and remove
 * products from their cart using onAdd/onRemove/isInCart props
 */
const Product: React.FC<Props> = ({ 
  style, 
  imageSrc, 
  title,
  description, 
  rating, 
  price,
  cartCount,
  onCartModify
}) => {
  return (
    <MainContainer style={style}>
      {rating && (
        <Rating>
          <StarIcon/>
          <RatingText>
            {rating}
          </RatingText>
        </Rating>
      )}
      <Image source={{ uri: imageSrc }} resizeMode='contain' />
      <RightContent>
        <Title numberOfLines={2}>{title}</Title>
        {description && <Description numberOfLines={3}>{description}</Description>}
        <BottomRow>
          <Price>
            ${price.toFixed(2)}
          </Price>
          <ModifyContainer>
            {cartCount ? (
              <CountButtons
                count={cartCount}
                onCountChange={onCartModify}
              />
            ) : (
              <BuyButton
                onPress={() => onCartModify(1)}
                label="Buy"
              />
            )}
          </ModifyContainer>
        </BottomRow>
      </RightContent>
    </MainContainer>
  )
}

export default Product
