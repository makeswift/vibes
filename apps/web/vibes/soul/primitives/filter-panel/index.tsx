'use client'

import React, { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Sliders, X } from 'lucide-react'

import { Accordions } from '@/vibes/soul/primitives/accordions'
import { Button } from '@/vibes/soul/primitives/button'
import { Chip } from '@/vibes/soul/primitives/chip'
import { Input } from '@/vibes/soul/primitives/input'
import { SidePanel } from '@/vibes/soul/primitives/side-panel'

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

export const FilterPanel = function FilterPanel() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  return (
    <SidePanel
      open={filterOpen}
      onOpenChange={setFilterOpen}
      trigger={
        <Button variant="secondary" size="small" asChild>
          <div className="flex gap-2">
            <span className="hidden @xl:block">Filter</span>
            <Sliders size={18} />
          </div>
        </Button>
      }
      content={
        <>
          <VisuallyHidden.Root>
            <Dialog.Title className="DialogTitle">Filter</Dialog.Title>
          </VisuallyHidden.Root>
          <div>
            <div className="flex items-center justify-between">
              <h2 className="flex gap-2 text-xl font-medium @lg:text-2xl">
                Filters
                {selectedTags.length > 0 && (
                  <span className="text-contrast-300">{selectedTags.length} applied</span>
                )}
              </h2>
              <Button
                variant="tertiary"
                size="small"
                className="-mr-2 [&_div]:!px-1"
                onClick={() => setFilterOpen(false)}
                asChild
              >
                <div>
                  <X size={18} strokeWidth={1.5} className="text-background" />
                </div>
              </Button>
            </div>
            <Accordions
              className="mt-10"
              // TODO: filters should be customizable
              accordions={[
                {
                  title: 'sizing',
                  content: (
                    <div className="flex flex-wrap gap-2">
                      {sizingFilters.length &&
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
                      {colorFilters.length &&
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
                      <Input prepend="$" />
                      <Input prepend="$" />
                    </div>
                  ),
                },
              ]}
            />

            <div className="mt-auto flex justify-center gap-2 pt-10">
              <Button variant="secondary" onClick={() => setFilterOpen(false)}>
                Show 25 Results
              </Button>
              <Button variant="tertiary" onClick={() => setSelectedTags([])}>
                Reset
              </Button>
            </div>
          </div>
        </>
      }
    />
  )
}
