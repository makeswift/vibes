import * as React from 'react'
import type { SVGProps } from 'react'

const Popout12 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    className="stroke-current"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.5 9.5L9 3" strokeLinecap="square" />
    <path d="M3.5 2.5H9.5V8.5" strokeLinecap="square" />
  </svg>
)
export default Popout12
