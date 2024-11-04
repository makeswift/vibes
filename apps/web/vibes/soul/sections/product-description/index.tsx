import Image from 'next/image'

import { Accordion, Accordions } from '@/vibes/soul/primitives/accordions'

export type AccordionItem = {
  title: string
  content: React.ReactNode
}

export interface Props {
  accordions: AccordionItem[]
  image?: {
    src: string
    alt: string
  }
  video?: string
}

export function ProductDescription({ accordions, image, video }: Readonly<Props>) {
  return (
    <div className="bg-background @container">
      <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col-reverse items-start justify-between gap-x-4 gap-y-4 py-6 @xl:flex-row @xl:gap-x-10 @xl:px-6 @xl:py-24 @5xl:px-20 @7xl:gap-x-32">
        <div className="w-full px-4 @xl:sticky @xl:top-20 @xl:basis-1/2 @xl:px-0">
          <Accordions type="multiple">
            {accordions.map((accordion, index) => (
              <Accordion key={index} title={accordion.title} value={index.toString()}>
                {accordion.content}
              </Accordion>
            ))}
          </Accordions>
        </div>

        {/* Image || Video Container */}
        <div className="relative aspect-square w-full overflow-hidden @xl:aspect-[9/12] @xl:basis-1/2 @xl:rounded-2xl">
          {image ? (
            <Image
              src={image.src}
              fill
              alt={image.alt}
              sizes="(max-width: 500px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            video != null &&
            video !== '' && (
              <video className="h-full object-cover" muted loop autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            )
          )}
        </div>
      </div>
    </div>
  )
}
