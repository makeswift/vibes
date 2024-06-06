import * as React from 'react'
import type { SVGProps } from 'react'

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <circle cx={9} cy={9} r={6.5} stroke="#07090D" />
    <path stroke="#07090D" d="m18 18-4.5-4.5" />
  </svg>
)
export default SvgSearch
