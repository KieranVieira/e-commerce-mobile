import * as React from "react"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"

const Search = (props: SvgProps) => {
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
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21l-4.35-4.35" />
    </Svg>
  )
}

export default Search;
