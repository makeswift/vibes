'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { clsx } from 'clsx'

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [targetDate])

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date()
    let timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeRemaining
  }

  const AnimatedNumber = ({ value }: { value: number }) => {
    // State to handle the displayed value for smooth transitions
    const [displayValue, setDisplayValue] = useState(value)

    useEffect(() => {
      // Timeout to delay the update for smooth animation
      const timeout = setTimeout(() => setDisplayValue(value), 10)
      return () => clearTimeout(timeout)
    }, [value])

    return (
      <div
        className={clsx(
          'relative overflow-hidden',
          {
            default: 'h-[110px] w-10',
            full: 'h-[110px] w-10',
            split: 'h-[70px] w-6',
            banner: '',
          }[variant.type]
        )}
      >
        <div
          className="absolute inset-0 flex flex-col"
          style={{ transform: `translateY(-${displayValue * 100}%)` }}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className={clsx(
                'flex flex-shrink-0 items-center justify-center font-medium',
                {
                  default: 'h-[110px] w-10 text-6xl',
                  full: 'h-[110px] w-10 text-6xl',
                  split: 'h-[70px] w-6 text-[40px]',
                  banner: '',
                }[variant.type]
              )}
            >
              {i}
            </div>
          ))}
        </div>
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
          default: 'h-[110px] w-[100px]',
          full: 'h-[110px] w-[100px]',
          split: 'h-[70px] w-[70px]',
          banner: '',
        }[variant.type]
      )}
    >
      <AnimatedNumber value={Math.floor(value / 10)} />
      <AnimatedNumber value={value % 10} />
    </div>
  )

  return (
    <div
      className={clsx(
        'relative items-center justify-center overflow-hidden bg-primary-shadow bg-cover bg-center bg-no-repeat',
        {
          default: 'flex flex-col py-32',
          full: 'flex flex-col py-40',
          split: 'grid grid-cols-2',
          banner: 'flex flex-col',
        }[variant.type]
      )}
    >
      {variant.type === 'full' || variant.type === 'split' ? (
        <Image
          src={variant.type === 'full' ? variant.backgroundImage : variant.image}
          alt={title}
          height={1000}
          width={1000}
          className={clsx('w-full object-cover', { 'absolute inset-0': variant.type === 'full' })}
        />
      ) : null}

      <div
        className={clsx('relative z-10 text-center text-white', {
          'py-9': variant.type === 'split',
        })}
      >
        <h2 className="mb-8 text-2xl font-bold">{title}</h2>
        <div className={clsx('flex justify-center space-x-2')}>
          {Object.entries(timeLeft).map(([unit, value], index, array) => (
            <React.Fragment key={unit}>
              <div key={unit} className="flex flex-col items-center">
                <TwoDigitAnimatedNumber value={value} />
                <span className="mt-2 text-xs capitalize">{unit}</span>
              </div>
              {index < array.length - 1 && <>:</>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
