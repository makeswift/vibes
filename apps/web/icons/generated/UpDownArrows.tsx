import * as React from 'react';
import type { SVGProps } from 'react';

const SvgUpDownArrows = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m4 5.5 4-4 4 4M12 10.5l-4 4-4-4" stroke="#07090D" strokeWidth={1.5} />
  </svg>
);
export default SvgUpDownArrows;
