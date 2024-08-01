'use client'

import { useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuTriggerProps,
} from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import Icon from '@/vibes/soul/components/icon'

type Props = {
  label: string
  items: string[]
}

export const Dropdown = function Dropdown({
  label,
  items,
  ...props
}: Props & DropdownMenuTriggerProps) {
  const [open, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const handleSelectItem = (item: string) => {
    setSelectedItem(item)
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className="flex items-center gap-3 rounded-full border border-contrast-100 bg-white p-2 px-5 py-3 font-medium text-foreground transition-colors hover:bg-contrast-100 focus:outline-none focus:ring-1"
        {...props}
      >
        {selectedItem ?? label}
        <Icon
          name="ChevronDown"
          className={clsx(
            'h-5 w-5 text-foreground transition-transform',
            open ? 'rotate-180' : 'rotate-0'
          )}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 mt-2 max-h-[20rem] min-w-[10rem] overflow-y-scroll rounded-lg border border-contrast-100 bg-background shadow-[2px_4px_24px_#00000010] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
        {items.map(item => (
          <DropdownMenuItem
            key={item}
            className="cursor-default px-4 py-2 text-foreground outline-none transition-colors focus:bg-contrast-100"
            onSelect={() => handleSelectItem(item)}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown
