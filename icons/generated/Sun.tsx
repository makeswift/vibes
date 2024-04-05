import * as React from 'react'
import type { SVGProps } from 'react'

const SvgSun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    className="stroke-docs-foreground"
    {...props}
  >
    <circle cx={12} cy={12} r={6.5} fill="#FAD880" stroke="#07090D" />
    <path
      fill="#07090D"
      fillRule="evenodd"
      d="M12.5 3V0h-1v3zm0 21v-3h-1v3zm5.933-22.142-1.5 2.598-.866-.5 1.5-2.598zm-12 20.784 1.5-2.598-.866-.5-1.5 2.598zm16.21-16.209-2.599 1.5-.5-.866 2.598-1.5zm-20.785 12 2.598-1.5-.5-.866-2.598 1.5zM24 12.5h-3v-1h3zm-24 0h3v-1H0zm22.142 5.933-2.598-1.5.5-.866 2.598 1.5zm-20.784-12 2.598 1.5.5-.866-2.598-1.5zm16.209 16.21-1.5-2.599.866-.5 1.5 2.598zm-12-20.785 1.5 2.598.866-.5-1.5-2.598z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgSun
