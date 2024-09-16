'use client'

import React, { useEffect, useState } from 'react'

import { clsx } from 'clsx'

interface Props {
  title: string
  backgroundImage?: string
  targetDate: Date
}

export const Countdown = function Countdown({ title, backgroundImage, targetDate }: Props) {
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
      <div className={clsx('relative h-24 w-12 text-white')}>
        <div
          className={clsx(`absolute inset-0 flex h-24 flex-col`)}
          style={{
            transform: `translateY(-${String(displayValue * 100)}%)`,
            transition: 'transform 0.5s ease-out',
          }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex h-24 w-12 flex-shrink-0 items-center justify-center">
              <span className="text-4xl font-bold text-white">{i}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const TwoDigitAnimatedNumber = ({ value }: { value: number }) => (
    <div
      className={clsx(
        'flex h-24 w-24 rounded-lg',
        backgroundImage != null && backgroundImage !== ''
          ? 'bg-primary-shadow text-primary'
          : 'bg-primary text-primary-shadow'
      )}
    >
      <AnimatedNumber value={Math.floor(value / 10)} />
      <AnimatedNumber value={value % 10} />
    </div>
  )

  return (
    <div
      className={clsx(
        'relative flex min-h-screen flex-col items-center justify-center bg-primary-shadow',
        'bg-cover bg-center bg-no-repeat'
      )}
    >
      <div className="relative z-10 text-center text-white">
        <h1 className="mb-8 text-4xl font-bold">{title}</h1>
        <div className="flex space-x-2">
          {Object.entries(timeLeft).map(([unit, value], index, array) => (
            <React.Fragment key={unit}>
              <div key={unit} className="flex flex-col items-center border">
                <TwoDigitAnimatedNumber value={value} />
                <span className="mt-2 text-xl capitalize">{unit}</span>
              </div>
              {index < array.length - 1 && <span className="mt-2 text-5xl">:</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
