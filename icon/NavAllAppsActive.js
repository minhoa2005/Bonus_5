import * as React from "react"
import Svg, { Path } from "react-native-svg"
const NavAllAppsActive = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
        <Path fill="#185ece" d="M0 14a14 14 0 1 1 28 0 14 14 0 1 1-28 0" />
        <Path
            fill="none"
            stroke="#fafafa"
            d="M.5 14a13.5 13.5 0 1 1 27 0 13.5 13.5 0 1 1-27 0"
        />
        <Path fill="#fff" d="M13.981 15.82h3.916v.692h-3.916Zm0 0" />
        <Path
            fill="#fff"
            d="M19.694 8.865H8.148a.385.385 0 0 0-.385.384v9.309a.385.385 0 0 0 .385.385h11.546a.385.385 0 0 0 .385-.385V9.249a.385.385 0 0 0-.385-.384Zm-6.482 8.306v-2.106a.385.385 0 0 1 .385-.385h4.685a.385.385 0 0 1 .385.385v2.106a.385.385 0 0 1-.385.385h-4.685a.385.385 0 0 1-.385-.385ZM13.771 8.095l-.065-.364a.385.385 0 0 0-.374-.318H8.981a.385.385 0 0 0-.379.318l-.064.365Zm0 0"
        />
    </Svg>
)
export default NavAllAppsActive
