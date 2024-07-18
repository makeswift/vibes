import { default as NextLink } from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

interface Props extends ComponentPropsWithoutRef<typeof NextLink> {
  active?: boolean
}

export function Link({ active, className, ...rest }: Props) {
  return (
    <NextLink
      {...rest}
      className={clsx(
        className,
        'text-sm leading-normal transition-colors',
        active ? 'font-bold text-foreground' : 'text-contrast-400 hover:!text-foreground'
      )}
    />
  )
}
