import Image from 'next/image';

import { ScrollArea } from '@/vibes/soul/primitives/scroll-area';
import type { CartLineItem } from '@/vibes/soul/sections/cart';

export default function Preview() {
  return (
    <>
      {/* Vertical */}
      <div className="bg-background flex flex-col items-center px-6 py-8">
        <div className="@container relative w-full max-w-md rounded-2xl border border-(--card-border-color,var(--contrast-200)) bg-(--card-background,var(--background)) transition-colors duration-300 ease-linear has-[a]:hover:bg-(--card-hover-background,color-mix(in_oklab,var(--contrast-100)_50%,transparent))">
          <div className="px-6 pt-6">
            <div className="w-full">
              <h1 className="mb-6 font-[family-name:var(--cart-title-font-family,var(--font-family-heading))] text-3xl leading-none font-medium @xl:text-4xl">
                Cart
                <span className="ml-3 text-(--cart-subtext-text,var(--contrast-300)) contrast-more:text-(--cart-subtitle-text,var(--contrast-500))">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </h1>
              {/* Cart Items */}
              <ScrollArea className="h-96">
                <ul className="flex flex-col gap-5 pb-6">
                  {cartItems.map((cartItem) => (
                    <li
                      className="@container flex flex-col items-start gap-x-5 gap-y-4 @sm:flex-row"
                      key={cartItem.id}
                    >
                      <div className="relative aspect-square w-full max-w-24 overflow-hidden rounded-xl bg-(--cart-image-background,var(--contrast-100)) focus-visible:ring-2 focus-visible:ring-(--cart-focus,var(--primary)) focus-visible:ring-offset-4 focus-visible:outline-hidden">
                        <Image
                          alt={cartItem.image.alt}
                          className="object-cover"
                          fill
                          sizes="(min-width: 28rem) 9rem, (min-width: 24rem) 6rem, 100vw"
                          src={cartItem.image.src}
                        />
                      </div>
                      <div className="flex grow flex-col flex-wrap justify-between gap-y-2 @xl:flex-row">
                        <div className="flex w-full flex-1 flex-col @xl:w-1/2 @xl:pr-4">
                          <span className="font-medium">{cartItem.title}</span>
                          <span className="text-(--cart-subtext-text,var(--contrast-300)) contrast-more:text-(--cart-subtitle-text,var(--contrast-500))">
                            {cartItem.subtitle}
                          </span>
                          <span className="font-medium @xl:ml-auto">Qty: {cartItem.quantity}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
      {/* Horizontal */}
      <div className="bg-background flex flex-col items-center px-6 py-8">
        <div className="@container relative w-full max-w-md rounded-2xl border border-(--card-border-color,var(--contrast-200)) bg-(--card-background,var(--background)) transition-colors duration-300 ease-linear has-[a]:hover:bg-(--card-hover-background,color-mix(in_oklab,var(--contrast-100)_50%,transparent))">
          <div className="px-6 pt-6">
            <div className="w-full">
              <h1 className="mb-6 font-[family-name:var(--cart-title-font-family,var(--font-family-heading))] text-3xl leading-none font-medium @xl:text-4xl">
                Cart
                <span className="ml-3 text-(--cart-subtext-text,var(--contrast-300)) contrast-more:text-(--cart-subtitle-text,var(--contrast-500))">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </h1>
              {/* Cart Items */}
              <ScrollArea className="w-full" orientation="horizontal">
                <ul className="flex gap-2 pb-6">
                  {cartItems.map((cartItem) => (
                    <li
                      className="@container flex w-60 shrink-0 items-start gap-x-5"
                      key={cartItem.id}
                    >
                      <div className="relative aspect-square w-full max-w-24 overflow-hidden rounded-xl bg-(--cart-image-background,var(--contrast-100)) focus-visible:ring-2 focus-visible:ring-(--cart-focus,var(--primary)) focus-visible:ring-offset-4 focus-visible:outline-hidden">
                        <Image
                          alt={cartItem.image.alt}
                          className="object-cover"
                          fill
                          sizes="(min-width: 28rem) 9rem, (min-width: 24rem) 6rem, 100vw"
                          src={cartItem.image.src}
                        />
                      </div>
                      <div className="flex grow flex-col flex-wrap justify-between gap-y-2 @xl:flex-row">
                        <div className="flex w-full flex-1 flex-col @xl:w-1/2 @xl:pr-4">
                          <span className="font-medium">{cartItem.title}</span>
                          <span className="text-(--cart-subtext-text,var(--contrast-300)) contrast-more:text-(--cart-subtitle-text,var(--contrast-500))">
                            {cartItem.subtitle}
                          </span>
                          <span className="font-medium @xl:ml-auto">Qty: {cartItem.quantity}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const cartItems: CartLineItem[] = [
  {
    id: '1',
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    price: '$44.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
      alt: 'Philodendron Imperial Red',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'Monstera',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyMTIwYzE1ZC01YzlkLTQ3MDgtOTZhOS1hZDkwYjVmNDAwZWY=/n0P83RMnClS%202930x3663.jpeg',
      alt: 'Monstera',
    },
    quantity: 2,
  },
  {
    id: '3',
    title: 'Pink Caladium',
    subtitle: 'Indoor Plant',
    price: '$19.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/AaZW4j2VTd4%202489x3111.jpeg',
      alt: 'Pink Caladium',
    },
    quantity: 1,
  },
  {
    id: '4',
    title: 'Hoya Kerrii',
    subtitle: 'Indoor Plant',
    price: '$16.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmZmRlZDM2MS0yMWMwLTRiYjktOTU2Ny1mNWM0YjcwMGIwZWQ=/QSaMw6aC_AN%208600x10750.jpeg',
      alt: 'Hoya Kerrii',
    },
    quantity: 2,
  },
  {
    id: '5',
    title: 'Bird Nest Fern',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplYTBhYzExNC1lYWIwLTQyZjAtYmQzZS04NDJlNmRlM2RkNTc=/gfGRQi5pHeJ%203094x3868.jpeg',
      alt: 'Bird Nest Fern',
    },
    quantity: 1,
  },
  {
    id: '6',
    title: 'Jade Plant',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozZWFjZDhlZi1lY2EzLTRiMzYtYTJkNS02ZGJkOWE4MzUwYjQ=/lJg081kQqvc.jpeg',
      alt: 'Jade Plant',
    },
    quantity: 3,
  },
  {
    id: '7',
    title: 'Snake Plant',
    subtitle: 'Indoor Plant',
    price: '$34.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozOTRmNDIyNC0wZDRkLTRmOWMtYjVjNi03ZjljNGE2ZjdiOTU=/snake-plant.jpg',
      alt: 'Snake Plant',
    },
    quantity: 1,
  },
  {
    id: '8',
    title: 'Spider Plant',
    subtitle: 'Indoor Plant',
    price: '$12.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphNzdlNDQwNS1mNDIxLTRiZTQtOGJkMy0wZTc2OWMyYmEzYjY=/spider-plant.jpg',
      alt: 'Spider Plant',
    },
    quantity: 1,
  },
  {
    id: '9',
    title: 'African Fig Tree',
    subtitle: 'Indoor Plant',
    price: '$49.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo2YTk0Y2E0Yy0wMjcyLTRkZTItOWQ2Mi0xMTY4OTczYzI1ZWM=/african-fig.jpg',
      alt: 'African Fig Tree',
    },
    quantity: 2,
  },
  {
    id: '10',
    title: 'Birds of Paradise',
    subtitle: 'Indoor Plant',
    price: '$29.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo2MTE4YmY5MC0wOWJlLTRlZDUtYjYyOS0wNzgwOTdiOWNjYTk=/birds-of-paradise.jpg',
      alt: 'Birds of Paradise',
    },
    quantity: 1,
  },
  {
    id: '11',
    title: 'ZZ Plant',
    subtitle: 'Indoor Plant',
    price: '$22.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToxNTFhZTMwNC0zYWZhLTRiZDgtOWRlYy01ODU1OTZlNjQyZDM=/zz-plant.jpg',
      alt: 'ZZ Plant',
    },
    quantity: 2,
  },
  {
    id: '12',
    title: 'Dracaena',
    subtitle: 'Indoor Plant',
    price: '$18.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozOWNmZThkOC00Y2M0LTQ2ZTAtODUwMy1lZmVhMzhhMWRmN2Y=/dracaena.jpg',
      alt: 'Dracanea',
    },
    quantity: 1,
  },
];
