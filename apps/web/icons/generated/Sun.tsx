import * as React from 'react'
import type { SVGProps } from 'react'

const SvgSun = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <g clipPath="url(#sun_svg__a)">
      <circle cx={12} cy={12} r={6.25} stroke="currentColor" strokeWidth={1.5} />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 3V0h-1.5v3zm0 21v-3h-1.5v3zm5.9-22.017-1.5 2.598-1.3-.75 1.5-2.598zm-12 20.784 1.5-2.598-1.3-.75-1.5 2.598zM22.767 6.65l-2.598 1.5-.75-1.299 2.598-1.5zm-20.784 12 2.598-1.5-.75-1.299-2.598 1.5zM24 12.75h-3v-1.5h3zm-24 0h3v-1.5H0zm22.017 5.9-2.598-1.5.75-1.3 2.598 1.5zm-20.784-12 2.598 1.5.75-1.3-2.598-1.5zM17.35 22.767l-1.5-2.598 1.298-.75 1.5 2.598zm-12-20.784 1.5 2.598 1.299-.75-1.5-2.598z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="sun_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSun
