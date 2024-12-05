import * as React from 'react';
import type { SVGProps } from 'react';

const SvgTablet16 = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      height={13.5}
      rx={1.75}
      stroke="currentColor"
      strokeWidth={1.5}
      width={10.5}
      x={2.75}
      y={1.75}
    />
    <path d="M6.5 12.5h3" stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} />
  </svg>
);
export default SvgTablet16;
