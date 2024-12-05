import * as React from 'react';
import type { SVGProps } from 'react';

const SvgNextjsFront = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={244} width={244} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M243 120c0 65.722-53.278 119-119 119S5 185.722 5 120 58.278 1 124 1s119 53.278 119 119Z"
      fill="#fff"
      stroke="#000"
      strokeWidth={2}
    />
    <path
      d="M124 230c60.751 0 110-49.249 110-110S184.751 10 124 10 14 59.249 14 120s49.249 110 110 110"
      fill="#000"
    />
    <path
      d="M196.732 202.524 98.507 76H80v87.963h14.805v-69.16l90.305 116.674a110 110 0 0 0 11.622-8.953"
      fill="url(#nextjs-front_svg__a)"
    />
    <path d="M169.222 76h-14.666v88h14.666z" fill="url(#nextjs-front_svg__b)" />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="nextjs-front_svg__a"
        x1={147.222}
        x2={190.611}
        y1={152.389}
        y2={206.167}
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="nextjs-front_svg__b"
        x1={161.889}
        x2={161.643}
        y1={76}
        y2={140.625}
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgNextjsFront;
