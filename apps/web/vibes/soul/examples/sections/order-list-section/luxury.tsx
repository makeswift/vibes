import { getProducts } from '@/vibes/soul/data';
import { OrderListSection } from '@/vibes/soul/sections/order-list-section';
import { SidebarMenu } from '@/vibes/soul/sections/sidebar-menu';
import { StickySidebarLayout } from '@/vibes/soul/sections/sticky-sidebar-layout';

const products = await getProducts('Luxury');

const orders = [
  {
    id: '1',
    totalPrice: '$100',
    status: 'Delivered',
    href: '/order/1',
    lineItems: products
      .filter(() => Math.random() > 0.5)
      .map(({ id, title, subtitle, image, href }) => ({
        id,
        title,
        subtitle,
        image,
        href,
        price: `$${Math.floor(Math.random() * 500)}`,
      })),
  },
  {
    id: '2',
    totalPrice: '$150',
    status: 'Delivered',
    href: '/order/2',
    lineItems: products
      .filter(() => Math.random() > 0.5)
      .map(({ id, title, subtitle, image, href }) => ({
        id,
        title,
        subtitle,
        image,
        href,
        price: `$${Math.floor(Math.random() * 500)}`,
      })),
  },
  {
    id: '3',
    totalPrice: '$500',
    status: 'Delivered',
    href: '/order/3',
    lineItems: products
      .filter(() => Math.random() > 0.5)
      .map(({ id, title, subtitle, image, href }) => ({
        id,
        title,
        subtitle,
        image,
        href,
        price: `$${Math.floor(Math.random() * 500)}`,
      })),
  },
];

const links = [
  { href: '/preview/soul/order-list-section-luxury-example', label: 'Orders' },
  { href: '/preview/soul/address-list-section-example', label: 'Addresses' },
  { href: '/preview/soul/account-settings-section-example', label: 'Account' },
];

export default function Preview() {
  return (
    <StickySidebarLayout sidebar={<SidebarMenu links={links} />} sidebarSize="small">
      <OrderListSection orders={orders} paginationInfo={{ startCursor: '1', endCursor: '5' }} />
    </StickySidebarLayout>
  );
}
