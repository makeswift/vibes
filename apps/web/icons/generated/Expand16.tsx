import * as React from 'react';
import type { SVGProps } from 'react';

const SvgExpand16 = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m4.5 11.5 7-7"
      stroke="currentColor"
      strokeDasharray="1.5 3"
      strokeLinecap="square"
      strokeWidth={1.5}
    />
    <path d="M9 2h5v5M7 14H2V9" stroke="currentColor" strokeLinecap="square" strokeWidth={1.5} />
  </svg>
);
export default SvgExpand16;
