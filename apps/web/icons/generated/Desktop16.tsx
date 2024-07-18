import * as React from 'react'
import type { SVGProps } from 'react'

const Desktop16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    className="stroke-foreground"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.75" y="0.75" width="14.5" height="11.5" rx="2.25" strokeWidth="1.5" />
    <path d="M8 12V15" strokeWidth="1.5" />
    <path d="M10.5 15L5.5 15" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
)
export default Desktop16
