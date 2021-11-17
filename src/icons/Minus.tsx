import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const Minus = (props: SvgProps) => {
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
      <Path d="M5 12h14" />
    </Svg>
  )
}

export default Minus
