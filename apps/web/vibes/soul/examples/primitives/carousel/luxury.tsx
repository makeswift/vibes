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
    src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
    alt: 'Jada Square Toe Ballet Flat',
  },
  {
    src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT',
    alt: 'Jayla Woven Ballet Heel',
  },
  {
    src: 'https://rstr.in/monogram/vibes/1ipihAyvRQj',
    alt: 'Jessie Ballet Flat',
  },
  {
    src: 'https://rstr.in/monogram/vibes/YfQW8M1Gv2H/zTWKcqJrdIu',
    alt: 'Leighton Soft Leather Loafer',
  },
  {
    src: 'https://rstr.in/monogram/vibes/5QBR05kyrYo',
    alt: 'JADA SQUARE TOE BALLET FLAT',
  },
  {
    src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz/vfCehRZDBGk',
    alt: 'DARYA LUG SOLE FISHERMAN',
  },
];
