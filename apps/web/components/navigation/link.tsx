import clsx from 'clsx'
import { default as NextLink } from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<typeof NextLink> {
  active?: boolean
}

export function Link({ active, className, ...rest }: Props) {
  return (
    <NextLink
      {...rest}
      className={clsx(
        className,
        'text-sm leading-normal outline-none transition-colors focus-visible:underline focus-visible:underline-offset-[6px]',
        active ? 'font-medium text-foreground' : 'text-contrast-400 hover:!text-foreground'
      )}
    />
  )
}
