import * as React from "react"
import Svg, { Path } from "react-native-svg"
const NavHome = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} {...props}>
        <Path
            fillOpacity={0.4}
            d="M17.705 20.582H4.292a1.917 1.917 0 0 1-1.917-1.913V8.822A3.435 3.435 0 0 1 3.391 6.51l6.252-4.568a2.017 2.017 0 0 1 2.714 0l6.251 4.568a3.436 3.436 0 0 1 1.016 2.312v9.847a1.919 1.919 0 0 1-1.919 1.913Zm-8-10.182a.5.5 0 0 0-.5.5v4.99a.5.5 0 0 0 .5.5h2.592a.5.5 0 0 0 .5-.5v-4.989a.5.5 0 0 0-.5-.5Z"
        />
    </Svg>
)
export default NavHome
