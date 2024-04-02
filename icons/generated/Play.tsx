import * as React from 'react'
import type { SVGProps } from 'react'

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#BBF2A1"
      stroke="currentColor"
      d="M3 15.573V4.427a1.5 1.5 0 0 1 2.17-1.342l11.147 5.573c1.105.553 1.105 2.13 0 2.684L5.17 16.915A1.5 1.5 0 0 1 3 15.573Z"
    />
  </svg>
)
export default SvgPlay
