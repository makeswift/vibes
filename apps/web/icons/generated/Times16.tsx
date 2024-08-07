import * as React from 'react'
import type { SVGProps } from 'react'

const SvgTimes16 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.657 13.657 2.343 2.343"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="m9.06 6.94 1.768-1.768M11.89 4.111l1.767-1.768M2.343 13.657l1.768-1.768M5.172 10.828l1.767-1.767"
    />
  </svg>
)
export default SvgTimes16
