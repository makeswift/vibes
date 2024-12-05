import * as React from 'react';
import type { SVGProps } from 'react';

const SvgUpDownArrows = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path stroke="#07090D" strokeWidth={1.5} d="m4 5.5 4-4 4 4M12 10.5l-4 4-4-4" />
  </svg>
);
export default SvgUpDownArrows;
