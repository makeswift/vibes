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
            <CarouselItem className="basis-full @sm:basis-1/2 @4xl:basis-1/4" key={index}>
              <div className="relative aspect-square overflow-hidden rounded-md bg-contrast-100">
                <Image alt={alt} className="object-cover" fill src={src} />
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
    src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
    alt: 'Mini Bar Bag',
  },
  {
    src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
    alt: 'Mini Bar Bag',
  },
  {
    src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
    alt: 'Stem Caddy',
  },
  {
    src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
    alt: 'Hip Slinger',
  },
  {
    src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
    alt: 'Everyday Tote',
  },
  {
    src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
    alt: 'Mini Saddlebag',
  },
];
