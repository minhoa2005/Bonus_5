import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"
const IcLogout = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
        <Defs>
            <LinearGradient id="a" x1="0%" x2="0%" y1="0%" y2="100%">
                <Stop offset="0%" stopColor="#5295fb" />
                <Stop offset="100%" stopColor="#0348b5" />
            </LinearGradient>
        </Defs>
        <Path
            fill="url(#a)"
            fillOpacity={0.8}
            d="M15.02 11.808a.482.482 0 0 1 0-.689l1.6-1.6h-4.986a.487.487 0 0 1 0-.973h4.986l-1.6-1.608a.486.486 0 0 1 .688-.687l2.432 2.432a.488.488 0 0 1 0 .687l-2.432 2.431a.484.484 0 0 1-.344.145.491.491 0 0 1-.344-.138ZM7.906 17.78a1.336 1.336 0 0 1-.4-.06l-3.9-1.3a1.309 1.309 0 0 1-.887-1.233V3.511a1.3 1.3 0 0 1 1.3-1.292 1.337 1.337 0 0 1 .4.06l3.9 1.3a1.309 1.309 0 0 1 .884 1.232v11.673a1.3 1.3 0 0 1-1.297 1.296Z"
        />
        <Path
            fill="url(#a)"
            fillOpacity={0.8}
            d="M12.607 6.542a.486.486 0 0 1-.486-.486V4.002a.812.812 0 0 0-.81-.811H4.016a.486.486 0 1 1 0-.973h7.294a1.785 1.785 0 0 1 1.783 1.783v2.054a.486.486 0 0 1-.486.487ZM11.31 15.836H8.716a.486.486 0 1 1 0-.973h2.594a.812.812 0 0 0 .81-.811v-2.053a.486.486 0 1 1 .973 0v2.053a1.784 1.784 0 0 1-1.783 1.784Zm0 0"
        />
    </Svg>
)
export default IcLogout
