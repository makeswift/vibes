import * as React from 'react'
import type { SVGProps } from 'react'

const SvgArrowsHorizontal16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    className="stroke-foreground"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.5 4.5L1 8L4.5 11.5" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M11.5 11.5L15 8L11.5 4.5" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M6.5 8H9.5" strokeWidth="1.5" />
    <path d="M2 8H5.25" strokeWidth="1.5" />
    <path d="M10.75 8H14" strokeWidth="1.5" />
  </svg>
)
export default SvgArrowsHorizontal16
