import * as React from 'react';
import type { SVGProps } from 'react';

const SvgDesktop16 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <rect
      width={14.5}
      height={11.5}
      x={0.75}
      y={0.75}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2.25}
    />
    <path stroke="currentColor" strokeWidth={1.5} d="M8 12v3" />
    <path stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} d="M10.5 15h-5" />
  </svg>
);
export default SvgDesktop16;
