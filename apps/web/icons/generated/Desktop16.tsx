import * as React from 'react';
import type { SVGProps } from 'react';

const SvgDesktop16 = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      height={11.5}
      rx={2.25}
      stroke="currentColor"
      strokeWidth={1.5}
      width={14.5}
      x={0.75}
      y={0.75}
    />
    <path d="M8 12v3" stroke="currentColor" strokeWidth={1.5} />
    <path d="M10.5 15h-5" stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} />
  </svg>
);
export default SvgDesktop16;
