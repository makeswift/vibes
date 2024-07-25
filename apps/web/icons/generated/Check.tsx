import * as React from 'react'
import type { SVGProps } from 'react'

import clsx from 'clsx'

const SvgCheck = ({ className }: { className?: string }, props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    className={clsx('stroke-foreground', className)}
    {...props}
  >
    <path d="M7 11.5L14.5 4" strokeWidth="1.5" strokeLinecap="square" strokeDasharray="1.5 3.25" />
    <path d="M2 8.5L6 12.5" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
)
export default SvgCheck
