import * as React from 'react';
import type { SVGProps } from 'react';

const SvgChevronRight16 = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m10 7 1 1-1 1" stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} />
    <path
      d="M10.5 8.5 6 13M6 3l4.5 4.5"
      stroke="currentColor"
      strokeDasharray="1.5 3.5"
      strokeLinecap="square"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgChevronRight16;
