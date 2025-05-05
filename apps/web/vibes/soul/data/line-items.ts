import { unstable_cache } from 'next/cache';

import { CartLineItem } from '@/vibes/soul/sections/cart';

const Electric: CartLineItem[] = [
  {
    id: '1',
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    price: '$46',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
      alt: 'Philodendron Imperial Red',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'Caladium',
    subtitle: 'Indoor / Outdoor Plant',
    price: '$24',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/AaZW4j2VTd4%202489x3111.jpeg',
      alt: 'Caladium',
    },
    quantity: 2,
  },
];

const Luxury: CartLineItem[] = [
  {
    id: '1',
    title: 'DARYA LUG SOLE FISHERMAN',
    subtitle: 'Cuoro Embossed Snake',
    price: '$350',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo5MGE5YjM1ZS0wY2Q5LTQ2ZWQtOTg4My1iYTk0ZWQwNDA5ZDM=/darya-lug-2.webp',
      alt: 'DARYA LUG SOLE FISHERMAN',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'ROMA ROUND TOE BALLET FLAT',
    subtitle: 'Rust Closed Woven Calf',
    price: '$350',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3ZjAyMzkyYS1iN2ViLTQ0YzAtYmUxNi1kOThjMjk0MTU0ZGQ=/darya-lug.webp',
      alt: 'ROMA ROUND TOE BALLET FLAT',
    },
    quantity: 2,
  },
];

const Warm: CartLineItem[] = [
  {
    id: '1',
    title: 'Rolltop Saddlebag',
    subtitle: 'Orange',
    price: '$50',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0N2M2YzAzNy03ZGE4LTQ4ZjktYTI1ZS04MjZlN2ZjODRiN2I=/rolltop-saddle.jpeg',
      alt: 'Rolltop Saddlebag',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'Mini Bar Bag',
    subtitle: 'Camo',
    price: '$60',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowYjYxZGFiYi0yNTcyLTQ3OTUtOTZjOS1iZWEzOTZlNGFhZTY=/mini-bar-bag-3.jpeg',
      alt: 'Mini Bar Bag',
    },
    quantity: 2,
  },
];

const lineItems = {
  Electric: new Map(Electric.map((item) => [item.id, item])),
  Warm: new Map(Warm.map((item) => [item.id, item])),
  Luxury: new Map(Luxury.map((item) => [item.id, item])),
};

export const getLineItems = unstable_cache(
  (brand: 'Electric' | 'Warm' | 'Luxury') => Promise.resolve(Array.from(lineItems[brand].values())),
  [],
  {
    tags: ['line-items-electric'],
    revalidate: false,
  },
);

export async function getSubtotal(brand: 'Electric' | 'Warm' | 'Luxury'): Promise<string> {
  const cachedLineItems = await getLineItems(brand);
  const subtotal = cachedLineItems
    .map((lineItem) => parseInt(lineItem.price.replace('$', ''), 10) * lineItem.quantity)
    .reduce((acc, quantity) => acc + quantity, 0);
  return `$${subtotal}`;
}
