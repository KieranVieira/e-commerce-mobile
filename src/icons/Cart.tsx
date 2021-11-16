import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

const Cart = (props: SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke="#000"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Circle cx={10} cy={20.5} r={1} />
      <Circle cx={18} cy={20.5} r={1} />
      <Path d="M2.5 2.5h3l2.7 12.4a2 2 0 002 1.6h7.7a2 2 0 002-1.6l1.6-8.4H7.1" />
    </Svg>
  )
}

export default Cart;