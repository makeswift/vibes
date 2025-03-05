import { Field, FieldGroup } from '@/vibes/soul/form/dynamic-form/schema';
import { Address, AddressListSection } from '@/vibes/soul/sections/address-list-section';

import { addressAction } from './actions';

const addresses: Address[] = [
  {
    id: '1',
    firstName: 'Ben',
    lastName: 'Smith',
    company: 'Google',
    address1: '123 Main St',
    city: 'San Francisco',
    stateOrProvince: 'CA',
    postalCode: '94105',
    countryCode: 'United States',
  },
  {
    id: '2',
    firstName: 'Sherlock',
    lastName: 'Holmes',
    address1: '456 Main St',
    city: 'San Francisco',
    stateOrProvince: 'CA',
    postalCode: '94105',
    countryCode: 'United States',
  },
];

const fields: Array<Field | FieldGroup<Field>> = [
  [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      required: true,
    },
  ],
  {
    type: 'text',
    name: 'company',
    label: 'Company Name',
    required: false,
  },
  {
    type: 'text',
    name: 'phone',
    label: 'Phone Number',
    required: false,
  },
  {
    type: 'text',
    name: 'street1',
    label: 'Address Line 1',
    required: true,
  },
  {
    type: 'text',
    name: 'street2',
    label: 'Address Line 2',
    required: false,
  },
  [
    {
      type: 'text',
      name: 'city',
      label: 'Suburb/City',
      required: true,
    },
    {
      type: 'text',
      name: 'state',
      label: 'State/Province',
      required: true,
    },
  ],
  [
    {
      type: 'text',
      name: 'postalCode',
      label: 'Zip/Postcode',
      required: true,
    },
    {
      type: 'text',
      name: 'country',
      label: 'Country',
      required: true,
    },
  ],
  {
    name: 'id',
    type: 'hidden',
  },
];

export default function Preview() {
  return (
    <div className="p-10">
      <AddressListSection
        addressAction={addressAction}
        addresses={addresses}
        defaultAddress={{ id: '1' }}
        fields={fields}
      />
    </div>
  );
}
