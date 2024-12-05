import * as React from 'react';
import type { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={11} cy={11} r={7.25} stroke="currentColor" strokeWidth={1.5} />
    <path d="m21 21-4-4" stroke="currentColor" strokeDasharray="2 1.5" strokeWidth={1.5} />
  </svg>
);
export default SvgSearch;
