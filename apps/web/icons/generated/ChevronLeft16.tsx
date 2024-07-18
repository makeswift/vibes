import * as React from 'react'
import type { SVGProps } from 'react'

const ChevronLeft16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    className="stroke-current"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 7L5 8L6 9" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M5.5 8.5L10 13" strokeWidth="1.5" strokeLinecap="square" strokeDasharray="2 3.5" />
    <path d="M10 3L5.5 7.5" strokeWidth="1.5" strokeLinecap="square" strokeDasharray="2 3.5" />
  </svg>
)
export default ChevronLeft16
