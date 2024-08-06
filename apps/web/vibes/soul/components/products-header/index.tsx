'use client'

import React, { useState } from 'react'

import Accordions from '@/vibes/soul/components/accordions'
import { Button } from '@/vibes/soul/components/button'
import { Chip } from '@/vibes/soul/components/chip'
import { Dropdown } from '@/vibes/soul/components/dropdown'
import { Icon } from '@/vibes/soul/components/icon'
import { Input } from '@/vibes/soul/components/input'
import { SidePanel } from '@/vibes/soul/components/side-panel'

type Props = {
  title: string
  numberOfProducts: number
}

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

export const ProductsHeader = function ProductsHeader({ title, numberOfProducts }: Props) {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState([] as string[])

  return (
    <>
      {/* Products Header */}
      <header className="z-10 flex items-center justify-between bg-background pb-10 pt-28 text-foreground @container @lg:pt-44">
        <h1 className="pl-3 text-xl font-medium @xl:pl-20 @2xl:text-[40px]">
          {title} <span className="text-contrast-200">{numberOfProducts}</span>
        </h1>
        <div className="flex gap-2 pr-3 @xl:pr-20">
          <Button variant="dark" size="small" onClick={() => setFilterOpen(true)}>
            <span className="hidden @xl:block">Filter</span>
            <Icon name="Sliders" size={18} />
          </Button>

          <Dropdown
            label="Sort"
            items={['Most Recent', 'Most Popular', 'Price: Low to High', 'Price: High to Low']}
            size="small"
          />
        </div>
      </header>

      {/* Filter Panel */}
      <SidePanel isOpen={filterOpen} onClose={() => setFilterOpen(false)}>
        <div className="flex h-full flex-col bg-background p-20 text-foreground">
          <h2 className="text-2xl">Filters</h2>
          <Accordions
            className="mt-10"
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
                  <div className="flex w-[49%] gap-2">
                    <Input variant="price" />
                    <Input variant="price" />
                  </div>
                ),
              },
            ]}
          />

          <div className="mt-auto flex justify-center gap-2">
            <Button variant="dark" onClick={() => setFilterOpen(false)}>
              Show 25 Results
            </Button>
            <Button variant="light" onClick={() => setSelectedTags([])}>
              Reset
            </Button>
          </div>
        </div>
      </SidePanel>
    </>
  )
}

export default ProductsHeader
