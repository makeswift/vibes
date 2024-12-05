import { ComponentPropsWithoutRef } from 'react';

import { getNodeTextContent, slugify } from '@/lib/utils';

export default function H2({ children, ...rest }: ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2 {...rest} id={slugify(getNodeTextContent(children))}>
      {children}
    </h2>
  );
}
