import * as React from "react"
import Svg, { Path } from "react-native-svg"
const NavProfileActive = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
        <Path fill="#185ece" d="M0 14a14 14 0 1 1 28 0 14 14 0 1 1-28 0" />
        <Path
            fill="none"
            stroke="#fafafa"
            d="M.5 14a13.5 13.5 0 1 1 27 0 13.5 13.5 0 1 1-27 0"
        />
        <Path
            fill="#fff"
            d="M19.005 15.902a9.472 9.472 0 0 0-9.916 0 1.942 1.942 0 0 0-.884 1.637v2.781h11.688v-2.779a1.942 1.942 0 0 0-.888-1.639ZM16.459 7.681a3.409 3.409 0 1 1-4.821 0 3.409 3.409 0 0 1 4.821 0"
        />
    </Svg>
)
export default NavProfileActive
