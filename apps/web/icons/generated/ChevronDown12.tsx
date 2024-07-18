import * as React from 'react'
import type { SVGProps } from 'react'

const ChevronDown12 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    className="stroke-foreground"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 5L6 9L2 5" strokeWidth="1.5" />
  </svg>
)
export default ChevronDown12
