import { AccountLayout } from '@/vibes/soul/sections/account-layout';
import { Address, AddressListSection } from '@/vibes/soul/sections/address-list-section';

import { addressAction } from './actions';

const addresses: Address[] = [
  {
    id: '1',
    firstName: 'Ben',
    lastName: 'Smith',
    company: 'Google',
    street1: '123 Main St',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94105',
    country: 'United States',
  },
  {
    id: '2',
    firstName: 'Sherlock',
    lastName: 'Holmes',
    street1: '456 Main St',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94105',
    country: 'United States',
  },
];

const links = [
  { href: '/preview/soul/order-list-section-electric-example', label: 'Orders' },
  { href: '/preview/soul/address-list-section-example', label: 'Addresses' },
  { href: '/preview/soul/account-settings-section-example', label: 'Account' },
];

export default function Preview() {
  return (
    <AccountLayout links={links}>
      <AddressListSection
        addressAction={addressAction}
        addresses={addresses}
        defaultAddress={{ id: '1' }}
      />
    </AccountLayout>
  );
}
