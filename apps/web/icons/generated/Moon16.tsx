import * as React from 'react';
import type { SVGProps } from 'react';

const SvgMoon16 = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.858 8.856a5.5 5.5 0 0 1-7.714-7.714 6.5 6.5 0 1 0 7.714 7.714Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M11.625 4.375 9 3.5l2.625-.875L12.5 0l.875 2.625L16 3.5l-2.625.875L12.5 7z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMoon16;
