import { AccountLayout } from '@/vibes/soul/sections/account-layout';

const links = [
  { href: '/preview/soul/account-layout-example/Electric#a', label: 'Orders' },
  { href: '/preview/soul/account-layout-example/Electric#b', label: 'Addresses' },
  { href: '/preview/soul/account-layout-example/Electric#c', label: 'Account' },
];

export default function Preview() {
  return <AccountLayout links={links}>Put some stuff here!</AccountLayout>;
}
