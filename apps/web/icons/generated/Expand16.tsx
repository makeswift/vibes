import * as React from 'react'
import type { SVGProps } from 'react'

const SvgExpand16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    className="stroke-foreground"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.5 11.5L11.5 4.5" strokeWidth="1.5" strokeLinecap="square" strokeDasharray="1 3.5" />
    <path d="M9 2H14V7" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M7 14L2 14L2 9" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
)
export default SvgExpand16
