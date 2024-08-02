import Image from 'next/image'

import clsx from 'clsx'

import { Button } from '@/vibes/soul/components/button'
import { Icon } from '@/vibes/soul/components/icon'
import '@/vibes/soul/styles.css'

export interface Feature {
  image: {
    url: string
    dimensions: {
      width: number
      height: number
    }
    alt: string
  }
  heading?: string
  description?: string
  grid?: {
    icon: string
    title: string
    description: string
  }[]
  link: {
    label: string
    href: string
    target: '_self' | '_blank'
  }
}

export const Feature = function Feature({ image, heading, description, grid, link }: Feature) {
  return (
    <section className="relative bg-primary-shadow @container/section">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center @3xl/section:max-h-[880px] @3xl/section:flex-row @5xl/section:h-[100dvh]">
        {/* Image Side */}
        <div
          className="relative aspect-square w-full overflow-hidden @3xl/section:aspect-[9/12]
          @3xl/section:max-w-96 @3xl:ml-10 @4xl/section:my-[110px] @4xl/section:w-1/2 
          @4xl/section:rounded-xl @5xl/section:w-3/5 @6xl/section:ml-[200px]"
        >
          <Image src={image.url} alt={image.alt} fill className="object-cover" />
        </div>

        {/* Content Side */}
        <div
          className="mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-3 py-10 text-background 
          @container/content @lg/section:px-10 @5xl:p-20"
        >
          <h2 className="text-[40px] font-medium">{heading}</h2>
          <p className="max-w-xl pb-2">{description}</p>

          {grid?.length && (
            <ul className="mx-auto mb-16 grid gap-10 @xs/content:grid-cols-2 @4xl/section:mx-0">
              {grid.map(({ title, description, icon }, idx) => {
                return (
                  <li key={idx} className="flex gap-4 @sm/content:items-center">
                    <Icon
                      name={icon}
                      className="h-8 w-8 @xs/content:h-5 @xs/content:w-5 @lg/content:h-10 @lg/content:w-10"
                    />
                    <div className="flex flex-col">
                      <span className="-mt-1.5 text-lg font-medium @sm/content:-mt-1 @md/content:text-xl">
                        {title}
                      </span>
                      <span className="text-xs opacity-80 @md/content:text-sm">{description}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}

          <Button
            variant="primary"
            link={{ href: link.href, target: link.target }}
            className={clsx('text-foreground', {
              'self-center @xs/content:self-start': grid?.length,
            })}
          >
            {link.label}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Feature
