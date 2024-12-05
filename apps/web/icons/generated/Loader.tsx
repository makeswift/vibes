import * as React from 'react';
import type { SVGProps } from 'react';

const SvgLoader = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={28} width={28} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M26 14c0 6.627-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2"
      stroke="url(#loader_svg__a)"
      strokeLinecap="round"
      strokeWidth={4}
    />
    <defs>
      <radialGradient
        cx={0}
        cy={0}
        gradientTransform="matrix(12.50002 -1.5 1.5 12.50002 14 14)"
        gradientUnits="userSpaceOnUse"
        id="loader_svg__a"
        r={1}
      >
        <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
        <stop offset={0.797} stopColor="#fff" />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgLoader;
