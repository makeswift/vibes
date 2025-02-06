'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { clsx } from 'clsx';
import { useState } from 'react';

import { Button } from '@/vibes/soul/primitives/button';
import { Checkbox } from '@/vibes/soul/primitives/checkbox';
import { Dropdown } from '@/vibes/soul/primitives/dropdown';
import { Input } from '@/vibes/soul/primitives/input';
import { Label } from '@/vibes/soul/primitives/label';
import { TextArea } from '@/vibes/soul/primitives/textarea';

const shippingMethods = [
  {
    id: '1',
    label: 'Free Shipping',
    cost: '$0.00',
  },
  {
    id: '2',
    label: 'Expidited Shipping',
    cost: '$10.00',
  },
];
interface Props {
  includeSameAsBillingAddress?: boolean;
  includeShippingMethod?: boolean;
  includeOrderComments?: boolean;
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CheckoutForm = function CheckoutForm({
  includeSameAsBillingAddress,
  includeShippingMethod,
  includeOrderComments,
  onSubmit,
}: Props) {
  const [useSameAddress, setUseSameAddress] = useState(true);
  const [shippingMethod, setShippingMethod] = useState<string | null>();
  return (
    <form className="grid w-full grid-cols-1 gap-5 @sm:grid-cols-2">
      <Input label="First Name" required type="text" />
      <Input label="Last Name" required type="text" />
      <Input label="Company Name" type="text" />
      {/* TODO: Phone number input */}
      <Input label="Phone Number" type="text" />
      <Input label="Address" required type="text" />
      <Input label="Apartment/Suite/Building" type="text" />
      <Input label="City" required type="text" />

      <Dropdown items={['USA', 'England', 'Brazil']} label="Country" labelOnTop required />
      <Dropdown
        items={['Alabama', 'California', 'Georgia', 'Florida', 'Texas']}
        label="State/Provence"
        labelOnTop
        required
      />
      <Input label="ZIP/Postcode" required type="text" />

      {includeSameAsBillingAddress === true && (
        <Checkbox
          checked={useSameAddress}
          className="@sm:col-span-2"
          htmlFor="address"
          label="My billing address is the same as my shipping address."
          setChecked={setUseSameAddress}
        />
      )}

      {includeShippingMethod === true && (
        <div className="mt-2 @sm:col-span-2">
          <Label className="text-foreground">Shipping Method</Label>
          <RadioGroupPrimitive.Root className="mt-2 flex flex-col gap-2">
            {shippingMethods.map((option, index) => (
              <RadioGroupPrimitive.Item
                className={clsx(
                  'flex w-full items-center justify-between rounded-lg border p-4 text-sm font-medium transition-colors duration-300',
                  'ring-primary focus-visible:outline-0 focus-visible:ring-2',
                  option.id === shippingMethod
                    ? 'bg-foreground text-background'
                    : 'bg-contrast-100 hover:bg-contrast-200',
                )}
                key={index}
                onClick={() => setShippingMethod(option.id)}
                value={option.id}
              >
                <span>{option.label}</span>
                <span>{option.cost}</span>
              </RadioGroupPrimitive.Item>
            ))}
          </RadioGroupPrimitive.Root>
        </div>
      )}

      {includeOrderComments === true && (
        <TextArea className="mt-2 @sm:col-span-2" label="Order Comments" />
      )}

      {/* TODO: disbale until form is complete */}
      <Button
        className="ml-auto @sm:col-span-2"
        onClick={(e) => onSubmit?.(e)}
        text="Continue"
        variant="secondary"
      />
    </form>
  );
};
