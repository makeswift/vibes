import { getProducts } from '@/vibes/soul/data';
import { AccountLayout } from '@/vibes/soul/sections/account-layout';
import { OrderDetailsSection } from '@/vibes/soul/sections/order-details-section';

const products = await getProducts('Warm');

const order = {
  id: '1',
  status: 'Delivered',
  statusColor: 'success' as const,
  date: '2021-01-01',
  destinations: [
    {
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
      lineItems: products
        .filter(() => Math.random() > 0.5)
        .map(({ id, title, subtitle, image, href }) => ({
          id,
          title,
          subtitle,
          image,
          href,
          price: `$${Math.floor(Math.random() * 500)}`,
          quantity: Math.round(Math.random() * 10) + 1,
          metadata: [
            { label: 'Color', value: 'Blue' },
            { label: 'Size', value: 'M' },
          ],
        })),
    },
    {
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
      lineItems: products
        .filter(() => Math.random() > 0.5)
        .map(({ id, title, subtitle, image, href }) => ({
          id,
          title,
          subtitle,
          image,
          href,
          price: `$${Math.floor(Math.random() * 500)}`,
          quantity: Math.round(Math.random() * 10) + 1,
          metadata: [
            { label: 'Color', value: 'Blue' },
            { label: 'Size', value: 'M' },
          ],
        })),
    },
  ],
  summary: {
    lineItems: [
      { label: 'Subtotal', value: '$700.00' },
      { label: 'Discount', value: '-$10.00' },
      { label: 'Shipping', value: '$20.00', subtext: 'Ground' },
      { label: 'Tax', value: '$50.00' },
    ],
    total: '$115',
  },
};

const links = [
  { href: '#', label: 'Orders' },
  { href: '#', label: 'Addresses' },
  { href: '#', label: 'Account' },
];

export default function Preview() {
  return (
    <AccountLayout links={links}>
      <OrderDetailsSection order={order} prevHref="#" />
    </AccountLayout>
  );
}
