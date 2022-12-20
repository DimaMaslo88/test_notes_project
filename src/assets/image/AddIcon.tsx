import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg width={32} height={32} viewBox="0 0 24 24" {...props}>
        <path
            fill="currentColor"
            d="M11 18h2v-3h3v-2h-3v-3h-2v3H8v2h3Zm-7 4V2h10l6 6v14Zm9-13h5l-5-5Z"
        />
    </svg>
)

export default SvgComponent
