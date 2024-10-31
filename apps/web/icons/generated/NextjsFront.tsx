import * as React from 'react'
import type { SVGProps } from 'react'

const SvgNextjsFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={244} height={244} fill="none" {...props}>
    <path
      fill="#fff"
      stroke="#000"
      strokeWidth={2}
      d="M243 120c0 65.722-53.278 119-119 119S5 185.722 5 120 58.278 1 124 1s119 53.278 119 119Z"
    />
    <path
      fill="#000"
      d="M124 230c60.751 0 110-49.249 110-110S184.751 10 124 10 14 59.249 14 120s49.249 110 110 110"
    />
    <path
      fill="url(#nextjs-front_svg__a)"
      d="M196.732 202.524 98.507 76H80v87.963h14.805v-69.16l90.305 116.674a110 110 0 0 0 11.622-8.953"
    />
    <path fill="url(#nextjs-front_svg__b)" d="M169.222 76h-14.666v88h14.666z" />
    <defs>
      <linearGradient
        id="nextjs-front_svg__a"
        x1={147.222}
        x2={190.611}
        y1={152.389}
        y2={206.167}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="nextjs-front_svg__b"
        x1={161.889}
        x2={161.643}
        y1={76}
        y2={140.625}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgNextjsFront
