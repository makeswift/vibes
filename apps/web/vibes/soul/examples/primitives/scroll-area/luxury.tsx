import Image from 'next/image';

import { ScrollArea } from '@/vibes/soul/primitives/scroll-area';
import type { CartLineItem } from '@/vibes/soul/sections/cart';

export default function Preview() {
  return (
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
  );
}

const cartItems: CartLineItem[] = [
  {
    id: '1',
    title: 'JADA SQUARE TOE BALLET FLAT',
    subtitle: '',
    price: '$350',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTUwMzNmMy0zYzRlLTQzOTUtYTc3MC1jYWM0OWE1YWMyY2E=/jada-square-toe.webp',
      alt: 'JADA SQUARE TOE BALLET FLAT',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'Jayla Woven Ballet Heel',
    subtitle: '',
    price: '$395',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTE5YTQ1Mi1lZDU3LTQ2NDYtODgxMC0yYzU2NjI0NGM3ODk=/jayla-woven.webp',
      alt: 'Jayla Woven Ballet Heel',
    },
    quantity: 2,
  },
  {
    id: '3',
    title: 'Jessie Ballet Flat',
    subtitle: '',
    price: '$450',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowZWIzNWY2My0yM2Y3LTRmNDAtYTUzOS0zY2JjNmFhYzJkYWQ=/jessie-ballet.webp',
      alt: 'Jessie Ballet Flat',
    },
    quantity: 1,
  },
  {
    id: '4',
    title: 'Leighton Soft Leather Loafer',
    subtitle: '',
    price: '$350',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmM2Y1MzJiZi1hYTg0LTQzNzctYTA4NS1hODZkMWI3NGFmOWU=/leighton-soft.jpeg',
      alt: 'Leighton Soft Leather Loafer',
    },
    quantity: 2,
  },
  {
    id: '5',
    title: 'JADA SQUARE TOE BALLET FLAT',
    subtitle: '',
    price: '$350',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmN2Q1MDUxMC03ZGEwLTQ3MGItYTI0Ny1mOTA0ZTNjYTkyZWU=/jada-square-toe.webp',
      alt: 'JADA SQUARE TOE BALLET FLAT',
    },
    quantity: 1,
  },
  {
    id: '6',
    title: 'DARYA LUG SOLE FISHERMAN',
    subtitle: '',
    price: '$290',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3ZjAyMzkyYS1iN2ViLTQ0YzAtYmUxNi1kOThjMjk0MTU0ZGQ=/darya-lug.webp',
      alt: 'DARYA LUG SOLE FISHERMAN',
    },
    quantity: 3,
  },
];
