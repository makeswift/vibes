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
              <div className="bg-contrast-100 relative aspect-square overflow-hidden rounded-md">
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
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1YzIwNTljMi04NzcwLTRiM2ItYmIzMy02ZTk0ODNkY2M5MDk=/mini-bar-bag.jpeg',
    alt: 'Mini Bar Bag',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphOTFmNjU3Ny0zMDMxLTQzNjYtOWUzNC02MjRkYWQ4OTkzOWI=/mini-bar-bag-2.jpeg',
    alt: 'Mini Bar Bag',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo5NTIxMmU4MC0xY2EwLTQxZjktOTBiYS0yOWFhYmU3ZTNkMzA=/stem-caddy.jpeg',
    alt: 'Stem Caddy',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0MDcxNDBlYy1jYmIzLTRiNjQtOTUxMS1mMTIyMGUyYWY5MjQ=/hip-slinger.jpeg',
    alt: 'Hip Slinger',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowODYwYTY2NC02NjdjLTRhODYtYTUxYy1jOWExNzI5YTdjMDk=/everyday-tote.jpeg',
    alt: 'Everyday Tote',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4YzEyMjUyOC0zMWU5LTQyYWYtOTFlYi04YjQzNmRiZGVmNDU=/mini-saddlebag.jpeg',
    alt: 'Mini Saddlebag',
  },
];
