import * as React from 'react';
import type { SVGProps } from 'react';

const SvgTypescriptBack = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={200} width={200} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect fill="#fff" height={194} rx={31} width={194} x={5} y={1} />
    <rect height={194} rx={31} stroke="#07090D" strokeWidth={2} width={194} x={5} y={1} />
  </svg>
);
export default SvgTypescriptBack;
