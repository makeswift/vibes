import * as React from 'react';
import type { SVGProps } from 'react';

const SvgShoppingBagFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={210} height={234} fill="none" {...props}>
    <path
      fill="#fff"
      stroke="#000"
      strokeWidth={2}
      d="M168.976 51.365h10.878c4.557 0 8.405 3.399 8.977 7.936l20.098 159.489a9.1 9.1 0 0 1-2.191 7.138 9.04 9.04 0 0 1-6.787 3.072H14.049a9.04 9.04 0 0 1-6.724-3.002 9.09 9.09 0 0 1-2.275-7.021l16.748-159.49c.485-4.619 4.37-8.122 8.999-8.122H43.35a4.36 4.36 0 0 0 4.357-4.358C47.707 21.596 68.257 1 93.602 1q1.882 0 3.73.15c5.858.474 11.803.474 17.662 0q1.847-.15 3.73-.15c25.344 0 45.894 20.596 45.894 46.007a4.36 4.36 0 0 0 4.358 4.358Z"
    />
    <path
      fill="#DA8624"
      fillRule="evenodd"
      d="M82.406 48.08c0-19.926 16.15-36.08 36.072-36.08s36.072 16.154 36.072 36.08v26.24H82.405zm36.072-31.16c-17.206 0-31.154 13.95-31.154 31.16V69.4h62.307V48.08c0-17.21-13.948-31.16-31.153-31.16"
      clipRule="evenodd"
    />
    <path
      fill="#F6A546"
      fillRule="evenodd"
      d="M57.81 48.08C57.81 28.154 73.96 12 93.884 12c19.922 0 36.072 16.154 36.072 36.08v26.24H57.811zm36.073-31.16c-17.205 0-31.153 13.95-31.153 31.16V69.4h62.306V48.08c0-17.21-13.948-31.16-31.153-31.16"
      clipRule="evenodd"
    />
    <path fill="url(#shopping-bag-front_svg__a)" d="M178.324 61.2H55.351L75.027 217H198z" />
    <path fill="#D79E42" d="M45.514 61.2h119.693l3.28 155.8H29.117z" />
    <path fill="#E4AA4D" d="M168.487 194.04 138.973 217H198z" />
    <path fill="url(#shopping-bag-front_svg__b)" d="M32.397 61.2H152.09L138.973 217H16z" />
    <defs>
      <linearGradient
        id="shopping-bag-front_svg__a"
        x1={124.957}
        x2={124.957}
        y1={61.2}
        y2={217}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EEE85F" />
        <stop offset={1} stopColor="#EEB45F" />
      </linearGradient>
      <linearGradient
        id="shopping-bag-front_svg__b"
        x1={85.685}
        x2={85.685}
        y1={61.2}
        y2={217}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EEE85F" />
        <stop offset={1} stopColor="#EEB45F" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgShoppingBagFront;
