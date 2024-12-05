import { ComponentPropsWithoutRef } from 'react';

export default function Code(props: ComponentPropsWithoutRef<'code'>) {
  return <code {...props} className="font-mono" />;
}
