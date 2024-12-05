import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPhone16 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M4.25 5c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 10 15.25H6a1.75 1.75 0 0 1-1.75-1.75z"
    />
    <path stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} d="M7.25 12.75h1.5" />
  </svg>
);
export default SvgPhone16;
