'use client'

import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

import { clsx } from 'clsx'
import { X } from 'lucide-react'

interface Default {
  type: 'default'
  images?: string[]
}

interface Full {
  type: 'full'
  backgroundImage: string
}

interface Split {
  type: 'split'
  image: string
}

interface Banner {
  type: 'banner'
}

interface Props {
  title: string
  targetDate: Date
  variant: Default | Full | Split | Banner
}

export const Countdown = function Countdown({
  title,
  targetDate,
  variant = { type: 'default' },
}: Props) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [banner, setBanner] = useState({ dismissed: false, initialized: false })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [targetDate])

  useEffect(() => {
    const hidden = localStorage.getItem('hidden-countdown') === 'true'
    setBanner({ dismissed: hidden, initialized: true })
  }, [])

  const hideBanner = useCallback(() => {
    setBanner(prev => ({ ...prev, dismissed: true }))
    localStorage.setItem('hidden-countdown', 'true')
  }, [])

  if (!banner.initialized) return null

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date()
    let timeRemaining = { days: 0, hours: 0, mins: 0, secs: 0 }

    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      }
    }

    return timeRemaining
  }

  const AnimatedNumber = ({ value }: { value: number }) => {
    // State to handle the displayed value for smooth transitions
    const [displayValue, setDisplayValue] = useState(value)

    useEffect(() => {
      // Timeout to delay the update for smooth animation
      const timeout = setTimeout(() => setDisplayValue(value))
      return () => clearTimeout(timeout)
    }, [value])

    return (
      <div className="relative overflow-hidden">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            style={{ transform: `translateY(-${displayValue * 100}%)` }}
            className="flex flex-shrink-0 flex-col items-center justify-center"
          >
            {i}
          </div>
        ))}
      </div>
    )
  }

  const TwoDigitAnimatedNumber = ({ value }: { value: number }) => (
    <div
      className={clsx(
        'flex items-center justify-center rounded-lg',
        variant.type === 'full'
          ? 'bg-primary-shadow text-primary'
          : 'bg-primary text-primary-shadow',
        {
          default: 'h-[110px] w-[100px]  [&>*>*]:h-[110px] [&>*]:h-[110px] [&>*]:w-10',
          full: 'h-[110px] w-[100px] [&>*>*]:h-[110px] [&>*]:h-[110px] [&>*]:w-10',
          split: 'h-[70px] w-[70px] [&>*>*]:h-[70px] [&>*]:h-[70px] [&>*]:w-6',
          banner: 'h-[38px] w-[38px] [&>*>*]:h-[38px] [&>*]:h-[38px] [&>*]:w-3',
        }[variant.type]
      )}
    >
      <AnimatedNumber value={Math.floor(value / 10)} />
      <AnimatedNumber value={value % 10} />
    </div>
  )

  return (
    <section
      className={clsx(
        'relative transition-all duration-300 ease-in @container',
        variant.type === 'banner'
          ? banner.dismissed
            ? 'pointer-events-none max-h-0'
            : 'max-h-[84px]'
          : null
      )}
    >
      <div
        className={clsx(
          'relative flex flex-col items-center justify-center overflow-hidden bg-primary-shadow bg-cover bg-center bg-no-repeat font-medium',
          {
            default: 'py-32',
            full: 'py-40',
            split: '@3xl:grid @3xl:grid-cols-2',
            banner: '',
          }[variant.type]
        )}
      >
        {variant.type === 'full' || variant.type === 'split' ? (
          <Image
            src={variant.type === 'full' ? variant.backgroundImage : variant.image}
            alt={title}
            height={1000}
            width={1000}
            className={clsx('h-full w-full object-cover', {
              'absolute inset-0': variant.type === 'full',
            })}
          />
        ) : null}

        <div
          className={clsx(
            'relative z-10 scale-[0.7] text-center text-white @2xl:scale-100',
            {
              default: 'text-6xl [&>div>div>span]:text-lg [&>h2]:text-[40px]',
              full: 'text-6xl [&>div>div>span]:text-lg',
              split: 'py-9 text-[40px] [&>div>div>span]:text-xs [&>h2]:text-2xl',
              banner: 'flex items-center gap-6 py-2.5 text-xl [&>div>div>span]:text-xs',
            }[variant.type]
          )}
        >
          <h2 className={clsx({ 'mb-6': variant.type !== 'banner' })}>{title}</h2>
          <div className="flex justify-center space-x-2">
            {Object.entries(timeLeft).map(([unit, value], index, array) => (
              <React.Fragment key={unit}>
                <div key={unit} className="flex flex-col items-center">
                  <TwoDigitAnimatedNumber value={value} />
                  <span className="mt-2 capitalize">{unit}</span>
                </div>
                {index < array.length - 1 && <span>:</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {variant.type === 'banner' ? (
        <button
          aria-label="Dismiss banner"
          onClick={e => {
            e.preventDefault()
            hideBanner()
          }}
          className="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-white transition-transform hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>
      ) : null}
    </section>
  )
}
