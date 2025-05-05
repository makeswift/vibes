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
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTUwMzNmMy0zYzRlLTQzOTUtYTc3MC1jYWM0OWE1YWMyY2E=/jada-square-toe.webp',
    alt: 'JADA SQUARE TOE BALLET FLAT',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTE5YTQ1Mi1lZDU3LTQ2NDYtODgxMC0yYzU2NjI0NGM3ODk=/jayla-woven.webp',
    alt: 'Jayla Woven Ballet Heel',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowZWIzNWY2My0yM2Y3LTRmNDAtYTUzOS0zY2JjNmFhYzJkYWQ=/jessie-ballet.webp',
    alt: 'Jessie Ballet Flat',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmM2Y1MzJiZi1hYTg0LTQzNzctYTA4NS1hODZkMWI3NGFmOWU=/leighton-soft.jpeg',
    alt: 'Leighton Soft Leather Loafer',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmN2Q1MDUxMC03ZGEwLTQ3MGItYTI0Ny1mOTA0ZTNjYTkyZWU=/jada-square-toe.webp',
    alt: 'JADA SQUARE TOE BALLET FLAT',
  },
  {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3ZjAyMzkyYS1iN2ViLTQ0YzAtYmUxNi1kOThjMjk0MTU0ZGQ=/darya-lug.webp',
    alt: 'DARYA LUG SOLE FISHERMAN',
  },
];
