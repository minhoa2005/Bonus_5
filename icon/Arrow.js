import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Arrow = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} {...props}>
        <Path
            fill="#b3b3b3"
            fillOpacity={0.65}
            d="M14.276 12.255a.777.777 0 0 1 .482.169l7.449 5.992a.768.768 0 0 1 0 1.2l-7.418 5.958a.768.768 0 0 1-.962-1.197l6.673-5.363-6.706-5.393a.767.767 0 0 1 .482-1.366Z"
        />
    </Svg>
)
export default Arrow
