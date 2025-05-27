import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SvgComponent({width,height,...props}:SvgProps) {
  return (
    <Svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1a1 1 0 00-1 1v1H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V6a3 3 0 00-3-3h-1V2a1 1 0 10-2 0v1H8V2a1 1 0 00-1-1zm9 5V5H8v1a1 1 0 11-2 0V5H5a1 1 0 00-1 1v3h16V6a1 1 0 00-1-1h-1v1a1 1 0 11-2 0zM4 15v-4h4v4H4zm0 2v3a1 1 0 001 1h3v-4H4zm6 0v4h4v-4h-4zm6 0v4h3a1 1 0 001-1v-3h-4zm4-2h-4v-4h4v4zm-6 0h-4v-4h4v4z"
        fill="#0F0F0F"
      />
    </Svg>
  )
}

export default SvgComponent
