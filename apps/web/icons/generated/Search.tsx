import * as React from 'react'
import type { SVGProps } from 'react'

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <circle cx={11} cy={11} r={7.25} stroke="currentColor" strokeWidth={1.5} />
    <path stroke="currentColor" strokeDasharray="3 3" strokeWidth={1.5} d="m21 21-4-4" />
  </svg>
)
export default SvgSearch
