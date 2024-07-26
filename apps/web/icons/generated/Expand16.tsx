import * as React from 'react'
import type { SVGProps } from 'react'

const SvgExpand16 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeDasharray="2 3"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m4.5 11.5 7-7"
    />
    <path stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} d="M9 2h5v5M7 14H2V9" />
  </svg>
)
export default SvgExpand16
