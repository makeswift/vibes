'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

import { ChevronDownIcon } from '../icons/ChevronDownIcon'

interface OptionProps {
  label: string
  value: string
}

export interface Props {
  placeholder: string
  options: OptionProps[]
  status?: 'normal' | 'error' | 'success'
  disabled?: boolean
  value?: string
  setValue: (value: string) => void
  className?: string
}

export default function Dropdown({
  placeholder,
  options,
  status = 'normal',
  disabled,
  setValue,
  value,
  className,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn('relative w-full font-body text-foreground @container', className)}>
      <button
        className={cn(
          'relative z-0 flex w-full items-center justify-between border-2 px-4 py-[1.125rem] text-base font-medium leading-6 outline-none @lg:px-5 @lg:py-[1.375rem] @lg:text-xl @lg:leading-9 @lg:-tracking-[0.01em]',
          {
            'border-error': status === 'error',
            'border-success': status === 'success',
            'border-foreground': status === 'normal',
            'cursor-not-allowed border-contrast-300 text-contrast-300': disabled,
            'hover:border-dashed focus:border-dashed': !disabled,
            'border-dashed': isOpen,
          }
        )}
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-label={placeholder}
      >
        {options.find(option => option.value === value)?.label || placeholder}

        <ChevronDownIcon className="h-4 w-4 stroke-foreground @lg:h-6 @lg:w-6" />
      </button>

      <div
        className={cn(
          'fixed left-0 top-full z-10 mt-2 flex w-full flex-col items-start gap-1 border-2 border-foreground bg-background px-8 py-6 text-sm font-medium leading-6 @lg:text-2xl @lg:leading-9',
          {
            hidden: !isOpen,
          }
        )}
      >
        {options.map((option, index) => (
          <button
            key={index}
            className={cn(
              'border-b-2 outline-none hover:border-dashed hover:border-foreground focus:border-dashed focus:border-foreground',
              {
                'border-b-foreground': value === option.value,
                'border-b-transparent': value !== option.value,
              }
            )}
            onClick={() => {
              setValue(option.value)
              setIsOpen(false)
            }}
            type="button"
            aria-label={option.label}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
