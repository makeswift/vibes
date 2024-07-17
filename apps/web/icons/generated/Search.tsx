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
    <circle cx="12" cy="12" r="7.25" stroke-width="1.5" />
    <path d="M22 22L18 18" stroke-width="1.5" stroke-dasharray="3 3" />
  </svg>
)
export default SvgSearch
