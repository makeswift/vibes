import * as React from 'react'
import type { SVGProps } from 'react'

const SvgChevronLeft16 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} d="M6 7 5 8l1 1" />
    <path
      stroke="currentColor"
      strokeDasharray="1.5 3.5"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M5.5 8.5 10 13M10 3 5.5 7.5"
    />
  </svg>
)
export default SvgChevronLeft16
