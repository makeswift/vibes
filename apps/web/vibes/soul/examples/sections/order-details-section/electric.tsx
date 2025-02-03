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
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    badge: 'Popular',
    price: '$44.95',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      alt: 'Philodendron Imperial Red',
    },
    href: '#',
    quantity: 1
  },
  {
    id: '2',
    title: 'Monstera',
    subtitle: 'Indoor Plant',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
      alt: 'Monstera',
    },
    href: '#',
    rating: 4.4,
    quantity: 2
  },
  {
    id: '3',
    title: 'Pink Caladium',
    subtitle: 'Indoor Plant',
    price: '$19.95',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      alt: 'Pink Caladium',
    },
    href: '#',
    rating: 4.8,
    quantity: 1
  },
  {
    id: '4',
    title: 'Hoya Kerrii',
    subtitle: 'Indoor Plant',
    price: '$16.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
      alt: 'Hoya Kerrii',
    },
    href: '#',
    rating: 2.2,
    quantity: 2
  },
  {
    id: '5',
    title: 'Bird Nest Fern',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/gfGRQi5pHeJ',
      alt: 'Bird Nest Fern',
    },
    href: '#',
    rating: 3.5,
    quantity: 1
  },
  {
    id: '6',
    title: 'Jade Plant',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
      alt: 'Jade Plant',
    },
    href: '#',
    rating: 5,
    quantity: 2
  }
]

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
  lineItems: lineItems.slice(0,3)
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
  lineItems: lineItems.slice(3,6)
};

const subtotal = [destination1, destination2].reduce((acc, destination) => {
  return acc + destination.lineItems.reduce((accInner, lineItem) => accInner + parseInt(lineItem.price.slice(1), 10) * lineItem.quantity, 0);
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
