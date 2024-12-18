import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { randomUUID } from 'crypto';

import { Address, DefaultAddressConfiguration } from '@/vibes/soul/sections/address-list-section';
import { schema } from '@/vibes/soul/sections/address-list-section/schema';

export async function addressAction(
  prevState: Awaited<{
    addresses: Address[];
    lastResult: SubmissionResult | null;
    defaultAddress?: DefaultAddressConfiguration;
  }>,
  formData: FormData,
): Promise<{
  addresses: Address[];
  lastResult: SubmissionResult | null;
  defaultAddress?: DefaultAddressConfiguration;
}> {
  'use server';

  const intent = formData.get('intent');
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return {
      ...prevState,
      lastResult: submission.reply({ formErrors: ['Boom!'] }),
    };
  }

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  switch (intent) {
    case 'create': {
      // const newAddress = await createAddress(submission.value)
      const newAddress = { ...submission.value, id: randomUUID() };

      return {
        addresses: [...prevState.addresses, newAddress],
        lastResult: submission.reply({ resetForm: true }),
        defaultAddress: prevState.defaultAddress,
      };
    }
    case 'update': {
      // const newAddress = await updateAddress(submission.value)
      const newAddress = submission.value;

      return {
        addresses: prevState.addresses.map((address) =>
          address.id === newAddress.id ? newAddress : address,
        ),
        lastResult: submission.reply({ resetForm: true }),
        defaultAddress: prevState.defaultAddress,
      };
    }
    case 'delete': {
      // const deletedAddress = await deleteAddress(submission.value)
      const deletedAddress = submission.value;

      return {
        addresses: prevState.addresses.filter((address) => address.id !== deletedAddress.id),
        lastResult: submission.reply({ resetForm: true }),
        defaultAddress: prevState.defaultAddress,
      };
    }
    case 'setDefault': {
      // const defaultAddress = await setDefaultAddress(submission.value)
      const defaultAddress = submission.value;

      return {
        addresses: prevState.addresses,
        lastResult: submission.reply({ resetForm: true }),
        defaultAddress: { id: defaultAddress.id },
      };
    }
    default: {
      return prevState;
    }
  }
}
