import * as React from 'react';
import type { SVGProps } from 'react';

const SvgChevronRight16 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} d="m10 7 1 1-1 1" />
    <path
      stroke="currentColor"
      strokeDasharray="1.5 3.5"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M10.5 8.5 6 13M6 3l4.5 4.5"
    />
  </svg>
);
export default SvgChevronRight16;
