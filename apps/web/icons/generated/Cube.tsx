import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCube = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={20} width={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.5 6.667a1.67 1.67 0 0 0-.833-1.442l-5.834-3.333a1.67 1.67 0 0 0-1.666 0L3.333 5.225A1.67 1.67 0 0 0 2.5 6.667v6.666a1.67 1.67 0 0 0 .833 1.442l5.834 3.333a1.67 1.67 0 0 0 1.666 0l5.834-3.333a1.67 1.67 0 0 0 .833-1.442z"
      fill="#F5C6C6"
      stroke="currentColor"
    />
    <path d="M2.75 5.833 10 10l7.25-4.167M10 18.333V10" stroke="currentColor" />
  </svg>
);
export default SvgCube;
