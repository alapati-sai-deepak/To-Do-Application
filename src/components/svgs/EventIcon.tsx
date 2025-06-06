import * as React from "react"
import Svg, { Circle, Path, G, SvgProps } from "react-native-svg"

function SvgComponent({width,height,...props}:SvgProps) {
  return (
    <Svg
    //   xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    //   xmlSpace="preserve"
      {...props}
    >
      <Circle cx={256} cy={256} r={256} fill="#45b39c" />
      <Path
        d="M512 256c0-10.816-.747-21.445-2.048-31.904L399.781 113.925l-.107-.107c-2.24-2.773-5.707-4.48-9.547-4.48H121.861c-6.933 0-12.533 5.6-12.533 12.533v268.267c0 3.253 1.227 6.187 3.253 8.373l111.424 111.424C234.496 511.248 245.157 512 256 512c141.387 0 256-114.613 256-256z"
        opacity={0.1}
        // enableBackground="new"
      />
      <Path
        d="M390.133 109.333H121.867c-6.923 0-12.533 5.611-12.533 12.533v42.277h293.333v-42.277c0-6.922-5.611-12.533-12.534-12.533z"
        fill="#e56353"
      />
      <Path
        d="M109.333 164.144v225.989c0 6.923 5.611 12.533 12.533 12.533h268.267c6.923 0 12.533-5.611 12.533-12.533V164.144H109.333z"
        fill="#d5d6db"
      />
      <Path
        d="M109.333 164.144v215.323c0 6.923 5.611 12.533 12.533 12.533h268.267c6.923 0 12.533-5.611 12.533-12.533V164.144H109.333z"
        fill="#ebf0f3"
      />
      <Circle cx={144.8} cy={150.827} r={7.675} fill="#d15241" />
      <Circle cx={144.8} cy={177.493} r={7.675} fill="#d5d6db" />
      <Path
        d="M144.789 145.771a5.287 5.287 0 00-5.285 5.285v26.176a5.287 5.287 0 005.285 5.285 5.287 5.287 0 005.285-5.285v-26.176a5.29 5.29 0 00-5.285-5.285z"
        fill="#64798a"
      />
      <Circle cx={367.216} cy={150.827} r={7.675} fill="#d15241" />
      <Circle cx={367.216} cy={177.493} r={7.675} fill="#d5d6db" />
      <Path
        d="M367.216 145.771a5.287 5.287 0 00-5.285 5.285v26.176a5.284 5.284 0 1010.57 0v-26.176a5.29 5.29 0 00-5.285-5.285z"
        fill="#64798a"
      />
      <Circle cx={293.072} cy={150.827} r={7.675} fill="#d15241" />
      <Circle cx={293.072} cy={177.493} r={7.675} fill="#d5d6db" />
      <Path
        d="M293.072 145.771a5.287 5.287 0 00-5.285 5.285v26.176a5.284 5.284 0 1010.57 0v-26.176a5.287 5.287 0 00-5.285-5.285z"
        fill="#64798a"
      />
      <Circle cx={218.933} cy={150.827} r={7.675} fill="#d15241" />
      <Circle cx={218.933} cy={177.493} r={7.675} fill="#d5d6db" />
      <Path
        d="M218.928 145.771a5.287 5.287 0 00-5.285 5.285v26.176a5.284 5.284 0 1010.57 0v-26.176a5.287 5.287 0 00-5.285-5.285z"
        fill="#64798a"
      />
      <Path
        d="M218.491 210.437H246.875V238.82100000000003H218.491z"
        fill="#d5d6db"
      />
      <Path
        d="M265.125 210.437H293.509V238.82100000000003H265.125z"
        fill="#44c4a1"
      />
      <Path
        d="M311.733 210.437H340.117V238.82100000000003H311.733z"
        fill="#d5d6db"
      />
      <Path
        d="M358.4 210.437H386.784V238.82100000000003H358.4z"
        fill="#e56353"
      />
      <Path
        d="M125.221 255.019H153.60500000000002V283.403H125.221z"
        fill="#d5d6db"
      />
      <Path d="M171.84 255.019H200.224V283.403H171.84z" fill="#d5d6db" />
      <Path d="M218.491 255.019H246.875V283.403H218.491z" fill="#d5d6db" />
      <Path d="M265.125 255.019H293.509V283.403H265.125z" fill="#44c4a1" />
      <Path d="M311.733 255.019H340.117V283.403H311.733z" fill="#d5d6db" />
      <Path d="M358.4 255.019H386.784V283.403H358.4z" fill="#e56353" />
      <Path
        d="M125.221 299.573H153.60500000000002V327.957H125.221z"
        fill="#d5d6db"
      />
      <Path d="M171.84 299.573H200.224V327.957H171.84z" fill="#d5d6db" />
      <Path d="M218.491 299.573H246.875V327.957H218.491z" fill="#d5d6db" />
      <Path d="M265.125 299.573H293.509V327.957H265.125z" fill="#44c4a1" />
      <Path d="M311.733 299.573H340.117V327.957H311.733z" fill="#d5d6db" />
      <Path d="M358.4 299.573H386.784V327.957H358.4z" fill="#e56353" />
      <G>
        <Path
          d="M125.221 344.16H153.60500000000002V372.54400000000004H125.221z"
          fill="#d5d6db"
        />
        <Path
          d="M171.84 344.16H200.224V372.54400000000004H171.84z"
          fill="#d5d6db"
        />
        <Path
          d="M218.491 344.16H246.875V372.54400000000004H218.491z"
          fill="#d5d6db"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
