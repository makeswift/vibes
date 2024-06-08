import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

export type Props = {
  className?: string
  children: ReactNode
  media?: ReactNode
  mediaSize?: 'default' | 'large' | 'hidden'
  mediaAlign?: 'top' | 'center' | 'bottom'
  mediaOrder?: 'first' | 'last'
  topGlow?: boolean
}

const Card = forwardRef(function Card(
  { className, children, topGlow = false }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={clsx(className, 'relative @container')}>
      <div className="w-full rounded-2xl bg-muted-background/50 text-foreground ring-1 ring-foreground/20 @sm:rounded-3xl @2xl:flex-row">
        <div>{children}</div>

        {topGlow && (
          <div className="absolute inset-x-6 bottom-full h-20 overflow-hidden before:mx-auto before:mt-14 before:block before:h-3/4 before:w-3/5 before:rounded-full before:bg-primary before:opacity-10 before:blur-xl after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-3/5 after:-translate-x-1/2 after:bg-gradient-to-r after:from-primary/0 after:via-primary after:to-primary/0 after:mix-blend-overlay" />
        )}
      </div>
    </div>
  )
})

export default Card
