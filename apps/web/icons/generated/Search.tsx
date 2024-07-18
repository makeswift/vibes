import * as React from 'react'
import type { SVGProps } from 'react'

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    className="stroke-foreground"
    {...props}
  >
    <circle cx="11" cy="11" r="7.25" stroke-width="1.5" />
    <path d="M21 21L17 17" stroke-width="1.5" stroke-dasharray="2 2" />
  </svg>
)
export default SvgSearch
