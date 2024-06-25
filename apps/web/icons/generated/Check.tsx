import * as React from 'react'
import type { SVGProps } from 'react'

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" {...props}>
    <path
      fill="#fff"
      d="M12.5 26H10L0 14.068h5.114L10 20.077q.343.426.514 1.15.215.768.257.938.172.468.472.469.171 0 .3-.17a.53.53 0 0 0 .086-.427q-.043-.171-.215-.767a6 6 0 0 1-.128-1.279L23 2h5z"
    />
  </svg>
)
export default SvgCheck
