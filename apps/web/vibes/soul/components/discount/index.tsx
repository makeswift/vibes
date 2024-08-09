'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import clsx from 'clsx'

import Button from '@/vibes/soul/components/button'

import Icon from '../icon'

type Discount = {
  label: string
  code: string
}

type Props = {
  backgroundImage: string
  discounts: Discount[]
}

export const Discount = function Discount({ backgroundImage, discounts }: Props) {
  // TODO: store dismissed state in local storage
  const [dismissed, setDismissed] = useState(false)
  const [spin, setSpin] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [shuffledCodes, setShuffledCodes] = useState<Discount[]>([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (spin) {
      setTimeout(() => {
        setShowCode(true)
      }, 1000)
    }
  }, [spin])

  useEffect(() => {
    const shuffled = shuffleCodes(discounts.concat(discounts, discounts, discounts))
    setShuffledCodes(shuffled)
  }, [discounts])

  const shuffleCodes = (array: Discount[]) => {
    return array.sort(() => Math.random() - 0.5)
  }

  const copy = async () => {
    await navigator.clipboard.writeText(shuffledCodes[shuffledCodes.length - 2].code)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <section
      className={clsx(
        'fixed left-0 top-0 flex h-[100dvh] w-full items-center justify-center bg-contrast-100 text-background transition-[opacity,transform] duration-300 @container',
        dismissed ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      )}
    >
      <Image src={backgroundImage} alt="Background image" fill className="object-cover" />
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute right-5 top-5 text-foreground transition-transform hover:scale-110"
      >
        <Icon name="X" className="h-6 w-6" />
      </button>

      <div
        onClick={() => {
          if (showCode) {
            copy()
          } else {
            setSpin(true)
          }
        }}
        className="z-10 m-5 flex w-full cursor-pointer flex-col items-center justify-between gap-10 overflow-hidden rounded-[24px] transition-transform @4xl:h-[100px] @4xl:max-w-4xl @4xl:flex-row @4xl:bg-primary-shadow @4xl:active:scale-[0.99]"
      >
        <h2 className="flex w-full items-center justify-center text-4xl font-medium @4xl:justify-start @4xl:px-6 @4xl:text-[46px]">
          {showCode ? (copied ? 'Copied!' : `Copy discount code`) : 'Spin for discount'}
        </h2>
        <div className="flex w-full max-w-xs flex-col gap-4 rounded-[24px] bg-background px-6 pb-6 @4xl:p-0">
          <div className="relative h-[100px] w-full overflow-hidden bg-background text-foreground @4xl:max-w-[280px]">
            <div className="absolute left-0 top-0 z-10 h-10 w-full bg-gradient-to-b from-background to-transparent" />
            <div className="absolute bottom-0 left-0 z-10 h-10 w-full bg-gradient-to-t from-background to-transparent" />
            <div
              className="absolute -top-8 left-0 w-full transition-all duration-1000 ease-in-out"
              style={{
                transform: spin
                  ? `translateY(calc(-100% + ${discounts.length * 33}px))`
                  : 'translateY(0)',
              }}
            >
              {shuffledCodes.map((discount, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center py-1 text-[46px] font-medium uppercase leading-[1] tracking-[-1px] text-foreground transition-transform duration-500 @4xl:justify-end @4xl:px-6"
                >
                  {discount.label}
                </div>
              ))}
            </div>
          </div>
          <Button variant="dark" className="w-full justify-center @4xl:hidden">
            {showCode ? 'Copy' : 'Spin'}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Discount
