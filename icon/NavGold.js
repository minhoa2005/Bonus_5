import * as React from "react"
import Svg, { Path } from "react-native-svg"
const NavGold = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} {...props}>
        <Path fill="#969696" d="M0 11a11 11 0 1 1 22 0 11 11 0 1 1-22 0" />
        <Path
            fill="none"
            stroke="#fff"
            d="M2.7 11a8.3 8.3 0 1 1 16.6 0 8.3 8.3 0 1 1-16.6 0"
        />
        <Path
            fill="#fafafa"
            d="M11 7.333a1.1 1.1 0 0 1 1.1 1.1v5.133a1.1 1.1 0 0 1-1.1 1.1 1.1 1.1 0 0 1-1.1-1.1V8.433a1.1 1.1 0 0 1 1.1-1.1z"
        />
    </Svg>
)
export default NavGold
