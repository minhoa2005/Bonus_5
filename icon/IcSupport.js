import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"
const IcSupport = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
        <Defs>
            <LinearGradient id="a" x1="0%" x2="100%" y1="0%" y2="100%">
                <Stop offset="0%" stopColor="#5597ff" />
                <Stop offset="100%" stopColor="#185ece" />
            </LinearGradient>
        </Defs>
        <Path
            fill="url(#a)"
            d="M12.401 13.147a3.958 3.958 0 0 1-4.8 0l-3.583 3.579a9 9 0 0 0 11.96 0ZM16.726 4.019l-3.579 3.579a3.958 3.958 0 0 1 0 4.8l3.579 3.579a9 9 0 0 0 0-11.96ZM10 1a8.934 8.934 0 0 0-5.984 2.274l3.579 3.579a3.958 3.958 0 0 1 4.8 0l3.579-3.579A8.934 8.934 0 0 0 10 1ZM6.853 7.599 3.274 4.018a9 9 0 0 0 0 11.96l3.579-3.579a3.958 3.958 0 0 1 0-4.8Z"
        />
    </Svg>
)
export default IcSupport
