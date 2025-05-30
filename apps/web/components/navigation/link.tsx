import { clsx } from 'clsx';
import { default as NextLink } from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<typeof NextLink> {
  active?: boolean;
}

export function Link({ active = false, className, ...rest }: Props) {
  return (
    <NextLink
      {...rest}
      className={clsx(
        className,
        'text-sm leading-normal outline-hidden transition-colors focus-visible:underline focus-visible:underline-offset-[6px]',
        active ? 'text-foreground font-medium' : 'text-contrast-400 hover:!text-foreground',
      )}
    />
  );
}
