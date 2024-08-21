import * as React from 'react'
import type { SVGProps } from 'react'

const SvgSun16 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <circle cx={8} cy={8} r={4.25} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M8 2V0M12.243 3.757l1.414-1.414M14 8h2M12.243 12.243l1.414 1.414M8 16v-2M2.343 13.657l1.414-1.414M0 8h2M2.343 2.343l1.414 1.414"
    />
  </svg>
)
export default SvgSun16
