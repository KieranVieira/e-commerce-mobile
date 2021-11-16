import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Home = (props: SvgProps) => {
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
      <Path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <Path d="M9 22V12h6v10" />
    </Svg>
  )
}

export default Home;