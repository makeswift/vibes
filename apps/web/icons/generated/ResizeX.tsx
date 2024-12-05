import * as React from 'react';
import type { SVGProps } from 'react';

const SvgResizeX = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={16} fill="none" {...props}>
    <g filter="url(#resize-x_svg__a)">
      <path fill="#000" d="M8 2v4h12V2l5 5-5 5V8H8v4L3 7z" />
      <path
        stroke="#fff"
        strokeLinejoin="round"
        d="M8.5 2a.5.5 0 0 0-.854-.354l-5 5a.5.5 0 0 0 0 .708l5 5A.5.5 0 0 0 8.5 12V8.5h11V12a.5.5 0 0 0 .854.354l5-5a.5.5 0 0 0 0-.708l-5-5A.5.5 0 0 0 19.5 2v3.5h-11z"
      />
    </g>
    <defs>
      <filter
        id="resize-x_svg__a"
        width={28}
        height={16}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_326_3" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_326_3" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgResizeX;
