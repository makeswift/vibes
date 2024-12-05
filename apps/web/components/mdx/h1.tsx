import { ComponentPropsWithoutRef } from 'react';

import { getNodeTextContent, slugify } from '@/lib/utils';

export default function H1({ children, ...rest }: ComponentPropsWithoutRef<'h1'>) {
  return (
    <h1 {...rest} id={slugify(getNodeTextContent(children))}>
      {children}
    </h1>
  );
}
