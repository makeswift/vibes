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
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
    alt: 'Philodendron Imperial Red',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyMTIwYzE1ZC01YzlkLTQ3MDgtOTZhOS1hZDkwYjVmNDAwZWY=/n0P83RMnClS%202930x3663.jpeg',
    alt: 'Monstera',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/AaZW4j2VTd4%202489x3111.jpeg',
    alt: 'Pink Caladium',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmZmRlZDM2MS0yMWMwLTRiYjktOTU2Ny1mNWM0YjcwMGIwZWQ=/QSaMw6aC_AN%208600x10750.jpeg',
    alt: 'Hoya Kerrii',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplYTBhYzExNC1lYWIwLTQyZjAtYmQzZS04NDJlNmRlM2RkNTc=/gfGRQi5pHeJ%203094x3868.jpeg',
    alt: 'Bird Nest Fern',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozZWFjZDhlZi1lY2EzLTRiMzYtYTJkNS02ZGJkOWE4MzUwYjQ=/lJg081kQqvc.jpeg',
    alt: 'Jade Plant',
  },
];
