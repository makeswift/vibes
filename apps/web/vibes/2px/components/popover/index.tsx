'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'

import Button from '@/vibes/2px/components/button'

interface Props {
  className?: string
  title: string
  content: string | React.ReactNode
  trigger: React.ReactNode
  buttons?: React.ReactElement<typeof Button>[]
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function Popover({
  className,
  title,
  content,
  trigger,
  buttons,
  open,
  onOpenChange,
}: Props) {
  return (
    <div className={className}>
      <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content className="mt-4 w-full font-medium">
            <div className="flex w-[90vw] max-w-[30rem] flex-col gap-12 border-2 border-foreground pb-8 pl-5 pr-5 pt-5 ">
              <div className="flex flex-col gap-6 text-start">
                <h2 className="font-heading text-6xl leading-[4rem] -tracking-[0.0675rem]">
                  {title}
                </h2>
                <div className="font-body text-sm leading-6">{content}</div>
              </div>
              {buttons && buttons.length > 0 && (
                <div className="flex items-center justify-between gap-4">
                  {buttons?.map(button => button)}
                </div>
              )}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  )
}
