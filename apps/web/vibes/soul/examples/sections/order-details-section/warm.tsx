import { OrderDetailsSection } from '@/vibes/soul/sections/order-details-section';

export default function Preview() {
  return (
    <div className="p-6">
      <OrderDetailsSection order={order} prevHref="#" />
    </div>
  );
}

const lineItems = [
  {
    id: '1',
    title: 'Mini Bar Bag',
    subtitle: 'Blue/Black/Green',
    price: '$65',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1YzIwNTljMi04NzcwLTRiM2ItYmIzMy02ZTk0ODNkY2M5MDk=/mini-bar-bag.jpeg',
      alt: 'Mini Bar Bag',
    },
    href: '#',
    rating: 4.3,
    quantity: 1,
  },
  {
    id: '2',
    title: 'Mini Bar Bag',
    subtitle: 'Blue/Black/Green',
    price: '$65',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphOTFmNjU3Ny0zMDMxLTQzNjYtOWUzNC02MjRkYWQ4OTkzOWI=/mini-bar-bag-2.jpeg',
      alt: 'Mini Bar Bag',
    },
    href: '#',
    rating: 4.5,
    quantity: 2,
  },
  {
    id: '3',
    title: 'Stem Caddy',
    subtitle: 'Blue/Black/Green',
    price: '$60',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo5NTIxMmU4MC0xY2EwLTQxZjktOTBiYS0yOWFhYmU3ZTNkMzA=/stem-caddy.jpeg',
      alt: 'Stem Caddy',
    },
    href: '#',
    rating: 4.2,
    quantity: 1,
  },
  {
    id: '4',
    title: 'Hip Slinger',
    subtitle: 'Blue/Black/Green',
    price: '$105',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0MDcxNDBlYy1jYmIzLTRiNjQtOTUxMS1mMTIyMGUyYWY5MjQ=/hip-slinger.jpeg',
      alt: 'Hip Slinger',
    },
    href: '#',
    rating: 4.6,
    quantity: 2,
  },
  {
    id: '5',
    title: 'Everyday Tote',
    subtitle: 'Blue/Black/Green',
    price: '$185',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowODYwYTY2NC02NjdjLTRhODYtYTUxYy1jOWExNzI5YTdjMDk=/everyday-tote.jpeg',
      alt: 'Everyday Tote',
    },
    href: '#',
    rating: 4.8,
    quantity: 1,
  },
  {
    id: '6',
    title: 'Mini Saddlebag',
    subtitle: 'Blue/Black/Green',
    price: '$45',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4YzEyMjUyOC0zMWU5LTQyYWYtOTFlYi04YjQzNmRiZGVmNDU=/mini-saddlebag.jpeg',
      alt: 'Mini Saddlebag',
    },
    href: '#',
    rating: 4.1,
    quantity: 2,
  },
];

const destination1 = {
  id: '1',
  title: 'Destination 1/2',
  address: {
    name: 'John Doe',
    street1: '1000 San Marcos Ave',
    city: 'Austin',
    state: 'TX',
    zipcode: '78702',
    country: 'United States',
  },
  shipments: [
    {
      tracking: {
        number: '1Z370170375602560',
      },
      name: 'UPS Ground',
      status: 'Delivered on May 15, 2024',
    },
  ],
  lineItems: lineItems.slice(0, 3),
};

const destination2 = {
  id: '2',
  title: 'Destination 2/2',
  address: {
    name: 'John Doe',
    street1: '1000 San Marcos Ave',
    city: 'Austin',
    state: 'TX',
    zipcode: '78702',
    country: 'United States',
  },
  shipments: [
    {
      tracking: {
        number: '1Z370170375612565',
      },
      name: 'UPS Ground',
      status: 'Shipped on May 15, 2024',
    },
  ],
  lineItems: lineItems.slice(3, 6),
};

const subtotal = [destination1, destination2].reduce((acc, destination) => {
  return (
    acc +
    destination.lineItems.reduce(
      (accInner, lineItem) => accInner + parseInt(lineItem.price.slice(1), 10) * lineItem.quantity,
      0,
    )
  );
}, 0);
const discount = 10;
const shipping = 20;
const tax = subtotal * 0.08;
const total = subtotal - discount + shipping + tax;

const order = {
  id: '1',
  status: 'Delivered',
  statusColor: 'success' as const,
  date: '2021-01-01',
  destinations: [destination1, destination2],
  summary: {
    lineItems: [
      { label: 'Subtotal', value: `$${subtotal.toFixed(2)}` },
      { label: 'Discount', value: `-$${discount.toFixed(2)}` },
      { label: 'Shipping', value: `$${shipping.toFixed(2)}`, subtext: 'Ground' },
      { label: 'Tax', value: `$${tax.toFixed(2)}` },
    ],
    total: `$${total.toFixed(2)}`,
  },
};
