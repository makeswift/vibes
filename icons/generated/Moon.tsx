import * as React from 'react'
import type { SVGProps } from 'react'

const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <g clipPath="url(#moon_svg__a)">
      <mask id="moon_svg__b" fill="#fff">
        <path
          fillRule="evenodd"
          d="M19.903 11.4A8 8 0 1 1 8.6.097C3.74.777 0 4.952 0 10c0 5.523 4.477 10 10 10 5.048 0 9.222-3.74 9.903-8.6"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill="#94D0DD"
        fillRule="evenodd"
        d="M19.903 11.4A8 8 0 1 1 8.6.097C3.74.777 0 4.952 0 10c0 5.523 4.477 10 10 10 5.048 0 9.222-3.74 9.903-8.6"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="m19.903 11.4.99.139a1 1 0 0 0-1.728-.814zM8.6.097l.675.738a1 1 0 0 0-.813-1.728zm10.565 10.628A6.98 6.98 0 0 1 14 13v2a8.98 8.98 0 0 0 6.64-2.925zM14 13a7 7 0 0 1-7-7H5a9 9 0 0 0 9 9zM7 6c0-2.045.876-3.884 2.275-5.165L7.925-.64A8.98 8.98 0 0 0 5 6zm-6 4c0-4.542 3.366-8.3 7.739-8.912L8.462-.893C3.114-.144-1 4.447-1 10zm9 9a9 9 0 0 1-9-9h-2c0 6.075 4.925 11 11 11zm8.913-7.739A9 9 0 0 1 10 19v2c5.553 0 10.144-4.114 10.893-9.461z"
        mask="url(#moon_svg__b)"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14.375 5.625 11 4.5l3.375-1.125L15.5 0l1.125 3.375L20 4.5l-3.375 1.125L15.5 9z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="moon_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMoon
