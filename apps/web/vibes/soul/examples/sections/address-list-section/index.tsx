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

export default function Preview() {
  return (
    <div className="m-auto max-w-screen-xl p-5">
      <AddressListSection
        addressAction={addressAction}
        addresses={addresses}
        defaultAddressId="1"
      />
    </div>
  );
}
