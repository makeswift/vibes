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
    title: 'JADA SQUARE TOE BALLET FLAT',
    subtitle: '',
    badge: 'Bestseller',
    price: '$350',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTUwMzNmMy0zYzRlLTQzOTUtYTc3MC1jYWM0OWE1YWMyY2E=/jada-square-toe.webp',
      alt: 'JADA SQUARE TOE BALLET FLAT',
    },
    href: '#',
    rating: 4.5,
    quantity: 1,
  },
  {
    id: '2',
    title: 'Jayla Woven Ballet Heel',
    subtitle: '',
    badge: 'Bestseller',
    price: '$395',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTE5YTQ1Mi1lZDU3LTQ2NDYtODgxMC0yYzU2NjI0NGM3ODk=/jayla-woven.webp',
      alt: 'Jayla Woven Ballet Heel',
    },
    href: '#',
    rating: 4.8,
    quantity: 2,
  },
  {
    id: '3',
    title: 'Jessie Ballet Flat',
    subtitle: '',
    badge: 'Bestseller',
    price: '$450',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowZWIzNWY2My0yM2Y3LTRmNDAtYTUzOS0zY2JjNmFhYzJkYWQ=/jessie-ballet.webp',
      alt: 'Jessie Ballet Flat',
    },
    href: '#',
    rating: 4.6,
    quantity: 1,
  },
  {
    id: '4',
    title: 'Leighton Soft Leather Loafer',
    subtitle: '',
    badge: 'Almost Gone',
    price: '$350',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmM2Y1MzJiZi1hYTg0LTQzNzctYTA4NS1hODZkMWI3NGFmOWU=/leighton-soft.jpeg',
      alt: 'Leighton Soft Leather Loafer',
    },
    href: '#',
    rating: 4.2,
    quantity: 2,
  },
  {
    id: '5',
    title: 'JADA SQUARE TOE BALLET FLAT',
    subtitle: '',
    badge: 'Bestseller',
    price: '$350',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmN2Q1MDUxMC03ZGEwLTQ3MGItYTI0Ny1mOTA0ZTNjYTkyZWU=/jada-square-toe.webp',
      alt: 'JADA SQUARE TOE BALLET FLAT',
    },
    href: '#',
    rating: 4.7,
    quantity: 1,
  },
  {
    id: '6',
    title: 'DARYA LUG SOLE FISHERMAN',
    subtitle: '',
    badge: 'Almost Gone',
    price: '$290',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3ZjAyMzkyYS1iN2ViLTQ0YzAtYmUxNi1kOThjMjk0MTU0ZGQ=/darya-lug.webp',
      alt: 'DARYA LUG SOLE FISHERMAN',
    },
    href: '#',
    rating: 4.4,
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
