import * as React from 'react'
import type { SVGProps } from 'react'

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeDasharray="3 3.25"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M7 11.5 14.5 4"
    />
    <path stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} d="m2 8.5 4 4" />
  </svg>
)
export default SvgCheck
