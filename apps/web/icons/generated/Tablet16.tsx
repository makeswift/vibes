import * as React from 'react'
import type { SVGProps } from 'react'

const Tablet16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    className="stroke-foreground"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2.75" y="1.75" width="10.5" height="13.5" rx="1.75" strokeWidth="1.5" />
    <path d="M6.5 12.5H9.5" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
)
export default Tablet16
