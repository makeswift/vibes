'use client'

import React, { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'
import { Sliders } from 'lucide-react'

import Accordions from '@/vibes/soul/components/accordions'
import Button from '@/vibes/soul/components/button'
import Chip from '@/vibes/soul/components/chip'
import Input from '@/vibes/soul/components/input'

const sizingFilters = [
  {
    label: 'X-Large',
    amount: 25,
  },
  {
    label: 'Large',
    amount: 25,
  },
  {
    label: 'Medium',
    amount: 25,
  },
  {
    label: 'Small',
    amount: 25,
  },
  {
    label: 'X-Small',
    amount: 25,
  },
]
const colorFilters = [
  {
    label: 'Black',
    amount: 25,
  },
  {
    label: 'Green',
    amount: 25,
  },
  {
    label: 'Blue',
    amount: 25,
  },
  {
    label: 'Yellow',
    amount: 25,
  },
  {
    label: 'Red',
    amount: 25,
  },
  {
    label: 'White',
    amount: 25,
  },
]

export const FilterDialog = function FilterDialog() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState([] as string[])
  const [ref, setRef] = useState<HTMLAnchorElement | HTMLButtonElement | null>(null)

  return (
    <>
      <Dialog.Root open={filterOpen} onOpenChange={setFilterOpen}>
        <Dialog.Trigger asChild>
          <Button ref={setRef} variant="dark" size="small" className="w-fit">
            <span className="hidden @xl:block">Filter</span>
            <Sliders size={18} />
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal container={ref?.ownerDocument.body}>
          <Dialog.Overlay className="fixed inset-0 z-30 bg-foreground/50">
            <Dialog.Content
              className={clsx(
                'fixed right-0 top-0 flex h-full flex-col overflow-y-auto bg-background p-20',
                'transition-transform duration-300 ease-out',
                // TODO: Get panel to slide open and closed
                'data-[state=closed]:translate-x-full data-[state=open]:translate-x-0'
                // filterOpen ? 'translate-x-0' : 'translate-x-full'
              )}
            >
              <>
                <VisuallyHidden.Root>
                  <Dialog.Title className="DialogTitle">Filter</Dialog.Title>
                </VisuallyHidden.Root>
                <div>
                  <h2 className="text-2xl">Filters</h2>
                  <Accordions
                    className="mt-10"
                    defaultValue={['1', '2', '3']}
                    accordions={[
                      {
                        title: 'sizing',
                        content: (
                          <div className="flex flex-wrap gap-2">
                            {sizingFilters?.length &&
                              sizingFilters.map(({ label, amount }, index) => {
                                return (
                                  <Chip
                                    key={index}
                                    label={label}
                                    amount={amount}
                                    onClick={() =>
                                      setSelectedTags(
                                        prev =>
                                          prev.includes(label)
                                            ? prev.filter(tag => tag !== label) // Remove the label if it's already in the array
                                            : [...prev, label] // Add the label if it's not in the array
                                      )
                                    }
                                    selected={selectedTags.includes(label)}
                                  />
                                )
                              })}
                          </div>
                        ),
                      },
                      {
                        title: 'color',
                        content: (
                          <div className="flex flex-wrap gap-2">
                            {colorFilters?.length &&
                              colorFilters.map(({ label, amount }, index) => {
                                return (
                                  <Chip
                                    key={index}
                                    label={label}
                                    amount={amount}
                                    onClick={() =>
                                      setSelectedTags(
                                        prev =>
                                          prev.includes(label)
                                            ? prev.filter(tag => tag !== label) // Remove the label if it's already in the array
                                            : [...prev, label] // Add the label if it's not in the array
                                      )
                                    }
                                    selected={selectedTags.includes(label)}
                                  />
                                )
                              })}
                          </div>
                        ),
                      },
                      {
                        title: 'pricing',
                        content: (
                          <div className="flex w-[48%] gap-2">
                            <Input variant="price" />
                            <Input variant="price" />
                          </div>
                        ),
                      },
                    ]}
                  />

                  <div className="mt-auto flex justify-center gap-2 pt-10">
                    <Button variant="dark" onClick={() => setFilterOpen(false)}>
                      Show 25 Results
                    </Button>
                    <Button variant="light" onClick={() => setSelectedTags([])}>
                      Reset
                    </Button>
                  </div>
                </div>
              </>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default FilterDialog
