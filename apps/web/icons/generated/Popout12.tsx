import * as React from 'react'
import type { SVGProps } from 'react'

const SvgPopout12 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
    <path stroke="currentColor" strokeLinecap="square" d="M2.5 9.5 9 3M3.5 2.5h6v6" />
  </svg>
)
export default SvgPopout12
