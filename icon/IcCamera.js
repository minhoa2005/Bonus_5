import * as React from "react"
import Svg, { Path } from "react-native-svg"
const IcCamera = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
        <Path fill="#8b8b8b" d="M0 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0" />
        <Path
            fill="none"
            stroke="#fff"
            d="M.5 16a15.5 15.5 0 1 1 31 0 15.5 15.5 0 1 1-31 0"
        />
        <Path
            fill="#fff"
            d="M24.221 23.11H7.778A.778.778 0 0 1 7 22.331v-10.1a.778.778 0 0 1 .778-.781h3.609l1.827-1.944c.139-.144.247-.261.387-.261h4.666c.144 0 .247.117.387.261l1.828 1.944h3.74a.778.778 0 0 1 .778.774v10.1a.778.778 0 0 1-.779.786ZM16 12.976a4.266 4.266 0 1 0 4.23 4.3v-.036A4.248 4.248 0 0 0 16 12.976Zm6.61.009a.8.8 0 1 0 .788.81v-.014a.792.792 0 0 0-.783-.8ZM16 19.906a2.66 2.66 0 1 1 2.646-2.678s0 .009 0 .013A2.655 2.655 0 0 1 16 19.906Z"
        />
    </Svg>
)
export default IcCamera
