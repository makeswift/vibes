import * as React from 'react';
import type { SVGProps } from 'react';

const SvgChevronLeft16 = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 7 5 8l1 1" stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} />
    <path
      d="M5.5 8.5 10 13M10 3 5.5 7.5"
      stroke="currentColor"
      strokeDasharray="1.5 3.5"
      strokeLinecap="square"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgChevronLeft16;
