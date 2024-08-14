import Link from 'next/link'

import clsx from 'clsx'

import { Button } from '@/vibes/soul/components/button'

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

export const FeaturedVideo = function FeaturedVideo({
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
        mediaAlign ? 'bg-primary-shadow' : ''
      )}
    >
      <div className="mx-auto flex h-full max-w-screen-2xl flex-col @3xl:flex-row">
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
            'z-10 mx-auto flex flex-col items-start gap-4 px-3 py-10 text-background @5xl:p-20',
            mediaAlign
              ? 'w-full justify-end @xl:px-6 @3xl:w-1/2 @5xl:w-2/5'
              : 'absolute bottom-0 left-0 @xl:px-6',
            { '@3xl:order-1': mediaAlign === 'right' }
          )}
        >
          <h1 className="max-w-xl text-[40px] font-medium">{heading}</h1>
          <p className="max-w-xl pb-2">{description}</p>
          <Button
            variant={mediaAlign ? 'primary' : 'tertiary'}
            className={clsx(mediaAlign ? 'text-foreground' : 'text-background')}
            asChild
          >
            <Link href={link.href}>Show Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideo
