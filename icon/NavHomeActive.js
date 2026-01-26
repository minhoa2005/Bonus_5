import * as React from "react"
import Svg, { Path } from "react-native-svg"
const NavHomeActive = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
        <Path fill="#185ece" d="M0 14a14 14 0 1 1 28 0 14 14 0 1 1-28 0" />
        <Path
            fill="none"
            stroke="#fafafa"
            d="M.5 14a13.5 13.5 0 1 1 27 0 13.5 13.5 0 1 1-27 0"
        />
        <Path
            fill="#fff"
            d="M18.876 19.969H9.121a1.4 1.4 0 0 1-1.394-1.392v-7.161a2.5 2.5 0 0 1 .739-1.686l4.547-3.318a1.467 1.467 0 0 1 1.974 0l4.546 3.318a2.5 2.5 0 0 1 .739 1.682v7.161a1.4 1.4 0 0 1-1.396 1.396Zm-5.683-7.405a.5.5 0 0 0-.5.5v3.356a.5.5 0 0 0 .5.5h1.613a.5.5 0 0 0 .5-.5v-3.356a.5.5 0 0 0-.5-.5Z"
        />
    </Svg>
)
export default NavHomeActive
