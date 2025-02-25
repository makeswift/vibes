import Image from 'next/image';

import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/vibes/soul/primitives/carousel';

export default function Preview() {
  return (
    <div className="p-10">
      <Carousel>
        <CarouselContent className="mb-10">
          {images.map(({ src, alt }, index) => (
            <CarouselItem
              className="basis-full @sm:basis-1/2 @md:basis-1/3 @4xl:basis-1/4"
              key={index}
            >
              <div className="relative aspect-square overflow-hidden rounded-md bg-contrast-100">
                <Image
                  alt={alt}
                  className="object-cover"
                  fill
                  sizes="(min-width: 80rem) 25vw, (min-width: 56rem) 33vw, (min-width: 28rem) 50vw, 100vw"
                  src={src}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex w-full items-center justify-between">
          <CarouselScrollbar />
          <CarouselButtons nextLabel="Next" previousLabel="Previous" />
        </div>
      </Carousel>
    </div>
  );
}

const images: Array<{ src: string; alt: string }> = [
  {
    src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
    alt: 'Philodendron Imperial Red',
  },
  {
    src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
    alt: 'Monstera',
  },
  {
    src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
    alt: 'Pink Caladium',
  },
  {
    src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
    alt: 'Hoya Kerrii',
  },
  {
    src: 'https://rstr.in/monogram/vibes/gfGRQi5pHeJ',
    alt: 'Bird Nest Fern',
  },
  {
    src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
    alt: 'Jade Plant',
  },
];
