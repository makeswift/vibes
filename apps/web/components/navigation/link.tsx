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
        'text-sm leading-normal transition-opacity',
        active ? 'font-semibold opacity-100' : 'opacity-60 hover:!opacity-100 dark:opacity-70'
      )}
    />
  )
}
