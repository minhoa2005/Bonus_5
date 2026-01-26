import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"
const IcUserProfile = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
        <Defs>
            <LinearGradient
                id="a"
                x1={10.065}
                x2={17.858}
                y1={11.334}
                y2={23.994}
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0} stopColor="#5597ff" />
                <Stop offset={1} stopColor="#185ece" />
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={10.065}
                x2={14.61}
                y1={0.857}
                y2={15.776}
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0} stopColor="#5597ff" />
                <Stop offset={1} stopColor="#185ece" />
            </LinearGradient>
        </Defs>
        <Path
            fill="url(#a)"
            d="M16.673 13.202a12.63 12.63 0 0 0-13.221 0 2.589 2.589 0 0 0-1.179 2.183v3.706h15.584v-3.706a2.59 2.59 0 0 0-1.184-2.183Z"
        />
        <Path
            fill="url(#b)"
            d="M13.279 2.24a4.545 4.545 0 1 1-6.428 0 4.545 4.545 0 0 1 6.428 0"
        />
    </Svg>
)
export default IcUserProfile
