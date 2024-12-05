import * as React from 'react';
import type { SVGProps } from 'react';

const SvgArrowsHorz16 = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#arrows-horz-16_svg__a)" stroke="currentColor" strokeWidth={1.5}>
      <path d="M4.5 4.5 1 8l3.5 3.5M11.5 11.5 15 8l-3.5-3.5" strokeLinecap="square" />
      <path d="M6.5 8h3M2 8h3.25M10.75 8H14" />
    </g>
    <defs>
      <clipPath id="arrows-horz-16_svg__a">
        <path d="M0 0h16v16H0z" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsHorz16;
