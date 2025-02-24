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
        <CarouselContent className="h-60 space-x-10 px-10">
          {images.map(({ src, alt }, index) => (
            <CarouselItem className="relative w-60 overflow-hidden rounded-md" key={index}>
              <Image alt={alt} className="object-cover" fill src={src} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselScrollbar />
        <CarouselButtons nextLabel="Next" previousLabel="Previous" />
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
