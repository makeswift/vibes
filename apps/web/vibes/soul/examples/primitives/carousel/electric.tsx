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
