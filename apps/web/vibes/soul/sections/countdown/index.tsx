'use client';

import { clsx } from 'clsx';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Fragment, useCallback, useEffect, useState } from 'react';

interface Default {
  type: 'default';
  images?: string[];
}

interface Full {
  type: 'full';
  backgroundImage: string;
}

interface Split {
  type: 'split';
  image: string;
}

interface Banner {
  type: 'banner';
}

export interface CountdownProps {
  title: string;
  targetDate: Date;
  variant: Default | Full | Split | Banner;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --countdown-default-split-background: hsl(var(--primary-shadow));
 *   --countdown-number-default-background: hsl(var(--primary));
 *   --countdown-number-default-text: hsl(var(--primary-shadow));
 *   --countdown-number-full-background: hsl(var(--primary-shadow));
 *   --countdown-number-full-text: hsl(var(--primary));
 *   --countdown-image-background: hsl(var(--primary-shadow));
 *   --countdown-text: hsl(var(--background));
 *   --countdown-icon: hsl(var(--background));
 *   --countdown-font-family: var(--font-family-body);
 * }
 * ```
 */
export const Countdown = function Countdown({
  title,
  targetDate,
  variant = { type: 'default' },
}: CountdownProps) {
  const calculateTimeLeft = useCallback(() => {
    const difference = +targetDate - +new Date();
    let timeRemaining = { days: 0, hours: 0, mins: 0, secs: 0 };

    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    }

    return timeRemaining;
  }, [targetDate]);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [banner, setBanner] = useState({ dismissed: false, initialized: false });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate, calculateTimeLeft]);

  useEffect(() => {
    const hidden = localStorage.getItem('hidden-countdown') === 'true';
    setBanner({ dismissed: hidden, initialized: true });
  }, []);

  const hideBanner = useCallback(() => {
    setBanner((prev) => ({ ...prev, dismissed: true }));
    localStorage.setItem('hidden-countdown', 'true');
  }, []);

  if (!banner.initialized) return null;

  const AnimatedNumber = ({ value }: { value: number }) => {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
      const timeout = setTimeout(() => setDisplayValue(value));
      return () => clearTimeout(timeout);
    }, [value]);

    return (
      <div className="relative h-14 overflow-hidden [&>*]:h-14">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            className="flex shrink-0 flex-col items-center justify-center"
            key={i}
            style={{ transform: `translateY(-${displayValue * 100}%)` }}
          >
            {i}
          </div>
        ))}
      </div>
    );
  };

  const TwoDigitAnimatedNumber = ({ value }: { value: number }) => (
    <div
      className={clsx(
        'flex items-center justify-center rounded-lg',
        variant.type === 'full'
          ? 'bg-[var(--countdown-number-full-background,color-mix(in_oklab,hsl(var(--primary)),black_75%))] text-[var(--countdown-number-full-text,hsl(var(--primary)))]'
          : 'bg-[var(--countdown-number-default-background,hsl(var(--primary)))] text-[var(--countdown-number-default-text,color-mix(in_oklab,hsl(var(--primary)),black_75%))]',
        {
          default: 'h-14 w-14 @2xl:h-28 @2xl:w-28',
          full: 'h-14 w-14 @2xl:h-28 @2xl:w-28',
          split: 'h-14 w-14 @2xl:h-16 @2xl:w-16',
          banner: 'h-9 w-9',
        }[variant.type],
      )}
    >
      <AnimatedNumber value={Math.floor(value / 10)} />
      <AnimatedNumber value={value % 10} />
    </div>
  );

  return (
    <section
      className={clsx(
        'relative grid origin-top font-[family-name:var(--button-font-family,var(--font-family-body))] transition-all duration-300 ease-out @container',
        {
          'pointer-events-none grid-rows-[0fr]': variant.type === 'banner' && banner.dismissed,
          'grid-rows-[1fr]': variant.type === 'banner' && !banner.dismissed,
          'fixed top-0': variant.type === 'banner',
          'bg-[var(--countdown-default-split-background,color-mix(in_oklab,hsl(var(--primary)),black_75%))]':
            variant.type === 'default' || variant.type === 'split',
        },
      )}
    >
      <div className="overflow-hidden">
        <div
          className={clsx(
            'relative flex flex-col items-center justify-center overflow-hidden bg-[var(--countdown-image-background,color-mix(in_oklab,hsl(var(--primary)),black_75%))] bg-cover bg-center bg-no-repeat font-medium',
            {
              default: 'py-32 @5xl:container @5xl:mx-auto',
              full: 'py-40',
              split: '@5xl:container @3xl:mx-auto @3xl:grid @3xl:grid-cols-2',
              banner: '',
            }[variant.type],
          )}
        >
          {variant.type === 'full' || variant.type === 'split' ? (
            <Image
              alt={title}
              className={clsx('h-full w-full object-cover', {
                'absolute inset-0': variant.type === 'full',
              })}
              height={1000}
              src={variant.type === 'full' ? variant.backgroundImage : variant.image}
              width={1000}
            />
          ) : null}

          {variant.type === 'default' && variant.images
            ? variant.images.map((image, index) => (
                <Image
                  alt={title}
                  className={clsx(
                    'absolute object-contain',
                    index === 0
                      ? '-left-20 top-0 -translate-y-2/3 @5xl:-translate-y-1/3'
                      : '-right-20 bottom-0 translate-y-2/3 @5xl:translate-y-1/3',
                  )}
                  height={500}
                  key={`image-${index + 1}`}
                  src={image}
                  width={500}
                />
              ))
            : null}

          <div
            className={clsx(
              'relative z-10 px-4 text-center text-[var(--countdown-text,hsl(var(--background)))] @xl:px-6 @4xl:px-8',
              {
                default:
                  'text-3xl @2xl:text-6xl [&>div>div>span]:text-lg [&>h2]:text-3xl @2xl:[&>h2]:text-[40px]',
                full: 'text-3xl @2xl:text-6xl [&>div>div>span]:text-lg',
                split: 'py-9 text-3xl @2xl:text-[40px] [&>div>div>span]:text-xs [&>h2]:text-2xl',
                banner:
                  'flex flex-col items-center gap-4 py-2.5 text-lg @xl:flex-row @xl:gap-6 @2xl:text-xl [&>div>div>span]:text-xs [&>div>span]:mt-0.5',
              }[variant.type],
            )}
          >
            <h2
              className={clsx('leading-[1.1] [text-wrap:pretty]', {
                'mb-6 max-w-2xl': variant.type !== 'banner',
              })}
            >
              {title}
            </h2>
            <div className="flex justify-center space-x-2">
              {Object.entries(timeLeft).map(([unit, value], index, array) => (
                <Fragment key={unit}>
                  <div className="flex flex-col items-center" key={unit}>
                    <TwoDigitAnimatedNumber value={value} />
                    <span className="mt-1 capitalize">{unit}</span>
                  </div>
                  {index < array.length - 1 && <span>:</span>}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Close button (banner variation) */}
        {variant.type === 'banner' ? (
          <button
            aria-label="Dismiss banner"
            className="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-[var(--countdown-icon,hsl(var(--background)))] transition-transform hover:scale-110"
            onClick={(e) => {
              e.preventDefault();
              hideBanner();
            }}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        ) : null}
      </div>
    </section>
  );
};
