'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'

import Button from '@/vibes/2px/components/button'

interface Props {
  className?: string
  title: string
  content: string | React.ReactNode
  trigger: React.ReactNode
  buttons?: React.ReactNode
  open?: boolean
  closeIcon?: React.ReactNode
  onOpenChange?: (open: boolean) => void
}

export default function Popover({
  className,
  title,
  content,
  trigger,
  buttons,
  open,
  closeIcon,
  onOpenChange,
}: Props) {
  return (
    <div className={className}>
      <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content className="relative mt-4 w-full font-medium">
            <div className="flex w-[90vw] max-w-[30rem] flex-col gap-12 border-2 border-foreground pb-8 pl-5 pr-5 pt-5 ">
              <div className="flex flex-col gap-6 text-start">
                <h2 className="font-heading text-6xl leading-[4rem] -tracking-[0.0675rem]">
                  {title}
                </h2>
                <div className="font-body text-sm leading-6">{content}</div>
              </div>
              {buttons}
            </div>
            {closeIcon && (
              <PopoverPrimitive.Close className="absolute right-5 top-[1.75rem]">
                {closeIcon}
              </PopoverPrimitive.Close>
            )}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  )
}
