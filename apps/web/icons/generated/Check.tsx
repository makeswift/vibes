import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7 11.5 14.5 4"
      stroke="currentColor"
      strokeDasharray="1.5 3"
      strokeLinecap="square"
      strokeWidth={1.5}
    />
    <path d="m2 8.5 4 4" stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} />
  </svg>
);
export default SvgCheck;
