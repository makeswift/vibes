import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

type Props = {
  className?: string
  children?: ReactNode
}

const GlowContainer = forwardRef(function GlowContainer(
  { className, children }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={clsx(className, '@container')}>
      <div className="before:rounded-circle after:bg-noise @3xl:rounded-4xl @3xl:after:rounded-4xl relative z-0 rounded-3xl bg-gradient-to-b from-primary/25 to-background/50 p-2 ring-1 ring-primary-highlight/25 backdrop-blur-xl before:absolute before:-inset-3 before:-z-20 before:bg-primary/50 before:blur-2xl after:absolute after:inset-0 after:-z-10 after:rounded-3xl after:opacity-10 @xl:p-3 @xl:before:blur-[80px] @2xl:before:-inset-4 @2xl:before:blur-[100px] @5xl:p-4">
        <div className="animate-glowBoxHighlight after:rounded-circle absolute -top-px h-px w-60 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 after:block after:h-1 after:w-full after:-translate-y-1/2 after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent after:opacity-50 after:blur-sm" />

        <div className="overflow-hidden rounded-[16px] ring-1 ring-primary-highlight/20 @3xl:rounded-[20px]">
          {children}
        </div>
      </div>
    </div>
  )
})
export default GlowContainer
