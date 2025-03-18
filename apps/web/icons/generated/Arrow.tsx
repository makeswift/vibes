import * as React from 'react';
import type { SVGProps } from 'react';

const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={28} width={28} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19.992 12.286q.681 0 1.278.171.596.129.767.172h.128q.384 0 .469-.343v-.043q0-.3-.47-.472-.17-.043-.937-.214-.724-.214-1.15-.557l-6.009-4.886V2L26 12.286v3.428L14.068 26v-4.114L20.077 17q.426-.343 1.15-.514.768-.215.938-.257.468-.172.469-.472 0-.171-.17-.3a.53.53 0 0 0-.427-.086q-.171.043-.767.215a6 6 0 0 1-1.279.128H2v-3.428z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrow;
