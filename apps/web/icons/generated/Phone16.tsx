import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPhone16 = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.25 5c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 10 15.25H6a1.75 1.75 0 0 1-1.75-1.75z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path d="M7.25 12.75h1.5" stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} />
  </svg>
);
export default SvgPhone16;
