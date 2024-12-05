import * as React from 'react';
import type { SVGProps } from 'react';

const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m20.644 14.515.72.21a.75.75 0 0 0-1.156-.82zM9.485 3.356l.61.436a.75.75 0 0 0-.82-1.156zm10.723 10.549A7.2 7.2 0 0 1 16 15.25v1.5a8.7 8.7 0 0 0 5.08-1.625zM16 15.25A7.25 7.25 0 0 1 8.75 8h-1.5A8.75 8.75 0 0 0 16 16.75zM8.75 8c0-1.57.498-3.022 1.345-4.208l-1.22-.872A8.7 8.7 0 0 0 7.25 8zm-5 4a8.254 8.254 0 0 1 5.944-7.924l-.418-1.44C5.218 3.815 2.25 7.56 2.25 12zM12 20.25A8.25 8.25 0 0 1 3.75 12h-1.5c0 5.385 4.365 9.75 9.75 9.75zm7.924-5.944A8.254 8.254 0 0 1 12 20.25v1.5c4.44 0 8.185-2.968 9.364-7.026z"
      fill="currentColor"
    />
    <path
      clipRule="evenodd"
      d="M16.375 7.625 13 6.5l3.375-1.125L17.5 2l1.125 3.375L22 6.5l-3.375 1.125L17.5 11z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
export default SvgMoon;
