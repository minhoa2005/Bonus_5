import * as React from "react"
import Svg, { Path } from "react-native-svg"
const NavGoldActive = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
        <Path fill="#185ece" d="M0 14a14 14 0 1 1 28 0 14 14 0 1 1-28 0" />
        <Path
            fill="none"
            stroke="#fafafa"
            d="M.5 14a13.5 13.5 0 1 1 27 0 13.5 13.5 0 1 1-27 0"
        />
        <Path fill="#fff" d="M6 14a8 8 0 1 1 16 0 8 8 0 1 1-16 0" />
        <Path
            fill="none"
            stroke="#185ece"
            d="M8.1 14a5.9 5.9 0 1 1 11.8 0 5.9 5.9 0 1 1-11.8 0"
        />
        <Path
            fill="#185ece"
            d="M14 11.333a.8.8 0 0 1 .8.8v3.733a.8.8 0 0 1-.8.8.8.8 0 0 1-.8-.8v-3.733a.8.8 0 0 1 .8-.8z"
        />
    </Svg>
)
export default NavGoldActive
