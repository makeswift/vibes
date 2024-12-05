import * as React from 'react';
import type { SVGProps } from 'react';

const SvgTimes16 = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.657 13.657 2.343 2.343"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="m9.06 6.94 1.768-1.768M11.89 4.111l1.767-1.768M2.343 13.657l1.768-1.768M5.172 10.828l1.767-1.767"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgTimes16;
