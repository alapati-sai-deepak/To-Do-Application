import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SvgComponent({width,height,color,...props}:SvgProps) {
  return (
    <Svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      fill="none"

    //   xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#fff" d="M0 0H24V24H0z" />
      <Path
        d="M7 17l9.9-9.9M7 7l9.9 9.9"
        stroke="red"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
