import * as React from 'react'
import type { SVGProps } from 'react'

const SvgTablet16 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <rect
      width={10.5}
      height={13.5}
      x={2.75}
      y={1.75}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={1.75}
    />
    <path stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} d="M6.5 12.5h3" />
  </svg>
)
export default SvgTablet16
