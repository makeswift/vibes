import * as React from 'react';
import type { SVGProps } from 'react';

const SvgTypescriptFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} fill="none" {...props}>
    <rect width={194} height={194} x={5} y={1} fill="#fff" rx={31} />
    <rect width={194} height={194} x={5} y={1} stroke="#07090D" strokeWidth={2} rx={31} />
    <rect width={180} height={180} x={12} y={8} fill="url(#typescript-front_svg__a)" rx={24} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M123.533 147.907v16.646q4.094 2.08 9.683 3.121t11.781 1.04q6.035 0 11.467-1.144 5.431-1.144 9.524-3.771a19.3 19.3 0 0 0 6.482-6.867q2.387-4.24 2.387-10.481 0-4.526-1.364-7.933a18.5 18.5 0 0 0-3.936-6.06q-2.572-2.653-6.166-4.76t-8.108-3.979a102 102 0 0 1-5.93-2.627q-2.624-1.275-4.461-2.601-1.836-1.326-2.834-2.809-.996-1.483-.997-3.356 0-1.716.892-3.094.893-1.379 2.519-2.367t3.989-1.535q2.361-.546 5.247-.546 2.1 0 4.435.312t4.697.963q2.36.65 4.592 1.638a25.4 25.4 0 0 1 4.119 2.289V94.432q-3.831-1.455-8.37-2.159-4.54-.702-10.417-.702-5.983 0-11.335 1.275t-9.42 3.979q-4.067 2.706-6.429 6.893t-2.361 10.013q0 7.439 4.329 12.693 4.33 5.253 13.146 8.895 3.464 1.404 6.455 2.757 2.991 1.352 5.169 2.808 2.178 1.457 3.437 3.173 1.26 1.718 1.26 3.902a5.93 5.93 0 0 1-.788 2.991q-.787 1.379-2.387 2.393t-3.989 1.586q-2.387.573-5.589.573-5.457 0-10.81-1.899-5.353-1.898-9.919-5.696m-27.967-41.424h21.578V92.777H57v13.706h21.472v61.026h17.094z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="typescript-front_svg__a"
        x1={102}
        x2={102}
        y1={8}
        y2={188}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8FD0FF" />
        <stop offset={1} stopColor="#8076F0" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgTypescriptFront;
