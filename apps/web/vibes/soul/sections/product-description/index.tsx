import Image from 'next/image';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { Accordion, Accordions } from '@/vibes/soul/primitives/accordions';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface Props {
  accordions: Streamable<AccordionItem[]>;
  image?: Streamable<{
    src: string;
    alt: string;
  } | null>;
}

export function ProductDescription({
  accordions: streamableAccordions,
  image: streamableImage,
}: Props) {
  return (
    <div className="@container">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-stretch px-4 py-10 @xl:px-6 @xl:py-14 @2xl:flex-row @4xl:px-8 @4xl:py-20">
        <div className="w-full pb-5 @2xl:w-1/2 @2xl:basis-1/2 @2xl:pr-6 @4xl:pr-8">
          <Stream fallback={<AccordionsSkeleton />} value={streamableAccordions}>
            {(accordions) => (
              <Accordions className="sticky top-6" type="multiple">
                {accordions.map((accordion, index) => (
                  <Accordion key={index} title={accordion.title} value={index.toString()}>
                    {accordion.content}
                  </Accordion>
                ))}
              </Accordions>
            )}
          </Stream>
        </div>

        <div className="w-full self-start pt-5 @2xl:w-1/2 @2xl:basis-1/2 @2xl:pl-6 @4xl:pl-8">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl @2xl:aspect-[4/5]">
            <Stream
              fallback={<div className="h-full w-full animate-pulse bg-contrast-100" />}
              value={streamableImage}
            >
              {(image) =>
                image && (
                  <Image
                    alt={image.alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 500px) 100vw, 50vw"
                    src={image.src}
                  />
                )
              }
            </Stream>
          </div>
        </div>
      </div>
    </div>
  );
}

const AccordionsSkeleton = () => (
  <div className="flex h-[600px] w-full animate-pulse flex-col gap-8 pt-4">
    <div className="flex items-center justify-between">
      <div className="h-2 w-20 rounded-sm bg-contrast-100" />
      <div className="h-3 w-3 rounded-full bg-contrast-100" />
    </div>
    <div className="mb-1 flex flex-col gap-4">
      <div className="h-3 w-full rounded-sm bg-contrast-100" />
      <div className="h-3 w-full rounded-sm bg-contrast-100" />
      <div className="h-3 w-3/5 rounded-sm bg-contrast-100" />
    </div>
    <div className="flex items-center justify-between">
      <div className="h-2 w-24 rounded-sm bg-contrast-100" />
      <div className="h-3 w-3 rounded-full bg-contrast-100" />
    </div>
    <div className="flex items-center justify-between">
      <div className="h-2 w-20 rounded-sm bg-contrast-100" />
      <div className="h-3 w-3 rounded-full bg-contrast-100" />
    </div>
    <div className="flex items-center justify-between">
      <div className="h-2 w-32 rounded-sm bg-contrast-100" />
      <div className="h-3 w-3 rounded-full bg-contrast-100" />
    </div>
  </div>
);
