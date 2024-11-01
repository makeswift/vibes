import { OrderDetailsSection } from '@/vibes/soul/sections/order-details-section'

const order = {
  id: '1',
  title: 'Order #1',
  status: 'Delivered',
  date: '2021-01-01',
  shipments: [
    {
      id: '1',
      title: 'Shipment 1/2',
      status: 'Delivered',
      date: '2021-01-01',
      address: {
        name: 'John Doe',
        street1: '1000 San Marcos Ave',
        city: 'Austin',
        state: 'TX',
        zipcode: '78702',
        country: 'United States',
      },
      method: {
        id: '1Z370170375602560',
        name: 'UPS Ground',
        status: 'Delivered on May 15, 2024',
      },
      lineItems: [
        {
          id: '1',
          title: 'Product 1',
          price: '$50',
          quantity: 2,
          href: '#',
          metadata: [
            { label: 'Color', value: 'Blue' },
            { label: 'Size', value: 'M' },
          ],
        },
        {
          id: '2',
          title: 'Product 2',
          price: '$50',
          quantity: 2,
          href: '#',
          metadata: [
            { label: 'Color', value: 'Red' },
            { label: 'Size', value: 'S' },
          ],
        },
        {
          id: '3',
          title: 'Product 3',
          price: '$50',
          quantity: 2,
          href: '#',
          metadata: [
            { label: 'Color', value: 'Green' },
            { label: 'Size', value: 'L' },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'Shipment 2/2',
      status: 'Shipped',
      date: '2021-05-01',
      address: {
        name: 'John Doe',
        street1: '1000 San Marcos Ave',
        city: 'Austin',
        state: 'TX',
        zipcode: '78702',
        country: 'United States',
      },
      method: {
        id: '1Z370170375612565',
        name: 'UPS Ground',
        status: 'Shipped on May 15, 2024',
      },
      lineItems: [
        {
          id: '1',
          title: 'Product 1',
          price: '$50',
          quantity: 2,
          href: '#',
          metadata: [
            { label: 'Color', value: 'Blue' },
            { label: 'Size', value: 'M' },
          ],
        },
        {
          id: '2',
          title: 'Product 2',
          price: '$50',
          quantity: 2,
          href: '#',
          metadata: [
            { label: 'Color', value: 'Red' },
            { label: 'Size', value: 'S' },
          ],
        },
        {
          id: '3',
          title: 'Product 3',
          price: '$50',
          quantity: 2,
          href: '#',
          metadata: [
            { label: 'Color', value: 'Green' },
            { label: 'Size', value: 'L' },
          ],
        },
      ],
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
}

export default function Preview() {
  return <OrderDetailsSection order={order} prevHref="#" />
}
