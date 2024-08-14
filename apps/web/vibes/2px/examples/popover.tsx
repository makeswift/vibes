'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'
import Button from '@/vibes/2px/components/button'
import { MinusSolidIcon } from '@/vibes/2px/components/icons/MinusSolidIcon'
import { PlusSolidIcon } from '@/vibes/2px/components/icons/PlusSolidIcon'
import Popover from '@/vibes/2px/components/popover'

export default function Preview() {
  const [open, setIsOpen] = useState(false)
  const onOpenChange = (open: boolean) => setIsOpen(open)
  const trigger = (
    <button className="group" onClick={() => setIsOpen(o => !o)}>
      <PlusSolidIcon className={cn('h-8 w-8', open && 'hidden')} />
      <MinusSolidIcon className={cn('hidden h-8 w-8', open && 'block')} />
    </button>
  )
  const buttons = (
    <div className="flex items-center justify-between gap-4">
      <Button className="w-full" key="cancel" variant="primary" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button className="w-full" key="ok" variant="secondary" onClick={() => setIsOpen(false)}>
        OK
      </Button>
    </div>
  )

  return (
    <div className="flex min-h-96 items-start justify-center bg-white p-5  sm:p-8 lg:p-12">
      <Popover
        title="Popover title"
        content="Summer 2022 we moved into Reform´s big bright showroom in Copenhagen. For a week the NIKO JUNE production was happening here behind the glass front facing warm pavement and the oyster bar across the road.... "
        trigger={trigger}
        buttons={buttons}
        open={open}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}
