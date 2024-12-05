import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPropsBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={251} height={302} fill="none" {...props}>
    <path
      fill="#fff"
      stroke="#07090D"
      strokeWidth={1.73}
      d="M37.64 27.629C39.647 12.588 52.477 1.355 67.65 1.355h151.958c4.359 0 8.539 1.732 11.622 4.814l12.25 12.25c4.001 4.001 5.909 9.637 5.161 15.246L219.01 255.898c-3.151 23.635-23.313 41.287-47.158 41.287H35.758a18.17 18.17 0 0 1-12.845-5.32l-12.348-12.349a16.43 16.43 0 0 1-4.67-13.793z"
    />
  </svg>
);
export default SvgPropsBack;
