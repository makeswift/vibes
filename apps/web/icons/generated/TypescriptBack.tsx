import * as React from 'react';
import type { SVGProps } from 'react';

const SvgTypescriptBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} fill="none" {...props}>
    <rect width={194} height={194} x={5} y={1} fill="#fff" rx={31} />
    <rect width={194} height={194} x={5} y={1} stroke="#07090D" strokeWidth={2} rx={31} />
  </svg>
);
export default SvgTypescriptBack;
