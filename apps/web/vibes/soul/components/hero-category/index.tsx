import clsx from 'clsx'

import { Button } from '@/vibes/soul/components/button'
import '@/vibes/soul/styles.css'

type Props = {
  heading: string
  description: string
  video: string
  link: {
    href: string
    target: '_self' | '_blank'
  }
  mediaAlign?: 'left' | 'right'
}

export const HeroCategory = function HeroCategory({
  heading,
  description,
  video,
  link,
  mediaAlign,
}: Props) {
  return (
    <section
      className={clsx(
        'relative h-[100dvh] max-h-[880px] @container',
        mediaAlign ? 'bg-primary-900' : ''
      )}
    >
      <div className="flex h-full flex-col @3xl:flex-row">
        <video
          className={clsx(
            'h-full w-full object-cover',
            mediaAlign ? '@3xl:w-1/2 @5xl:w-3/5' : 'absolute inset-0',
            { '@3xl:order-2': mediaAlign === 'right' }
          )}
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
        <div
          className={clsx(
            'z-10 mx-auto flex max-w-7xl flex-col items-start gap-4 px-3 py-10 text-background @5xl:p-20',
            mediaAlign
              ? 'w-full justify-end @md:px-6 @3xl:w-1/2 @5xl:w-2/5'
              : 'absolute bottom-0 left-0 @3xl:px-6',
            { '@3xl:order-1': mediaAlign === 'right' }
          )}
        >
          <h1 className="max-w-xl text-[40px] font-medium">{heading}</h1>
          <p className="max-w-xl pb-2">{description}</p>
          <Button
            variant={mediaAlign ? 'primary' : 'tertiary'}
            link={{ href: link.href, target: link.target }}
            className={clsx(mediaAlign ? 'text-foreground' : 'text-background')}
          >
            Show Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroCategory
