import { ComponentPropsWithRef } from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '@/lib/utils'
import { CheckIcon } from '@/vibes/2px/components/icons/CheckIcon'

interface Props extends ComponentPropsWithRef<typeof CheckboxPrimitive.Root> {
  error?: boolean
}

export default function Checkbox({ checked = false, ref, ...props }: Props) {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'flex h-6 w-6 cursor-pointer items-center justify-center border-2 border-foreground hover:border-dashed',
        {
          'bg-background text-background': !checked,
          'bg-foreground text-foreground': checked,
        },
        props.className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator />
      {checked && <CheckIcon className=" h-4 w-4 text-background" />}
    </CheckboxPrimitive.Root>
  )
}
