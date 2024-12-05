import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPopout12 = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={12} width={12} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2.5 9.5 9 3M3.5 2.5h6v6" stroke="currentColor" strokeLinecap="square" />
  </svg>
);
export default SvgPopout12;
