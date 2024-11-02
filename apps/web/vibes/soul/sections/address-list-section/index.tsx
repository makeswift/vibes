'use client'

import { useActionState, useEffect, useState } from 'react'

import { SubmissionResult, getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { z } from 'zod'

import { Input } from '@/vibes/soul/form/input'
import { Badge } from '@/vibes/soul/primitives/badge'
import { Button } from '@/vibes/soul/primitives/button'

import { schema } from './schema'

export type Address = z.infer<typeof schema>

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

type Props = {
  title?: string
  addresses: Address[]
  defaultAddressId?: string
  updateAddressAction: Action<{ address: Address; lastResult: SubmissionResult | null }, FormData>
  deleteAddressAction: Action<{ id: string; lastResult: SubmissionResult | null }, FormData>
  createAddressAction: Action<{ address: Address; lastResult: SubmissionResult | null }, FormData>
  setDefaultAddressAction: Action<{ id: string; lastResult: SubmissionResult | null }, FormData>
  editLabel?: string
  deleteLabel?: string
  updateLabel?: string
  createLabel?: string
  cancelLabel?: string
  showAddFormLabel?: string
  setDefaultLabel?: string
}

export function AddressListSection({
  title = 'Addresses',
  addresses,
  defaultAddressId,
  updateAddressAction,
  deleteAddressAction,
  createAddressAction,
  setDefaultAddressAction,
  editLabel = 'Edit',
  deleteLabel = 'Delete',
  updateLabel = 'Update',
  createLabel = 'Create',
  cancelLabel = 'Cancel',
  showAddFormLabel = 'Add address',
  setDefaultLabel = 'Set as default',
}: Props) {
  const [defaultAddressIdState, setDefaultAddressIdState] = useState(defaultAddressId)
  const [addressesState, setAddressesState] = useState(addresses)
  const [activeAddressIds, setActiveAddressIds] = useState<string[]>([])
  const [showNewAddressForm, setShowNewAddressForm] = useState(false)

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl">{title}</h1>
        {!showNewAddressForm && (
          <Button size="small" onClick={() => setShowNewAddressForm(true)}>
            {showAddFormLabel}
          </Button>
        )}
      </div>
      <div>
        {showNewAddressForm && (
          <div className="border-b border-contrast-200 pb-6 pt-5">
            <AddressForm
              address={{
                id: 'new',
                street1: '',
                street2: '',
                city: '',
                state: '',
                zipcode: '',
              }}
              action={async function (lastResult, formData) {
                const response = await createAddressAction(lastResult, formData)

                setShowNewAddressForm(false)
                setAddressesState(prev => [...prev, response.address])

                return response
              }}
              onCancel={() => setShowNewAddressForm(false)}
              cancelLabel={cancelLabel}
              submitLabel={createLabel}
            />
          </div>
        )}
        {addressesState.map(address => (
          <div key={address.id} className="border-b border-contrast-200 pb-6 pt-5">
            {activeAddressIds.includes(address.id) ? (
              <AddressForm
                address={address}
                action={async function (lastResult, formData) {
                  const response = await updateAddressAction(lastResult, formData)

                  setActiveAddressIds(prev => prev.filter(id => id !== address.id))
                  setAddressesState(prev =>
                    prev.map(a => (a.id === response.address.id ? response.address : a))
                  )

                  return response
                }}
                onCancel={() => setActiveAddressIds(prev => prev.filter(id => id !== address.id))}
                cancelLabel={cancelLabel}
                submitLabel={updateLabel}
              />
            ) : (
              <div className="space-y-4">
                <AddressPreview
                  address={address}
                  isDefault={defaultAddressIdState === address.id}
                />
                <div className="flex gap-1">
                  <Button
                    variant="tertiary"
                    size="small"
                    onClick={() => setActiveAddressIds(prev => [...prev, address.id])}
                    aria-label={`${editLabel}: ${address.name}`}
                  >
                    {editLabel}
                  </Button>
                  <AddressActionButton
                    address={address}
                    action={async function (lastResult, formData) {
                      const response = await deleteAddressAction(lastResult, formData)

                      setAddressesState(prev => prev.filter(a => a.id !== response.id))

                      return response
                    }}
                    aria-label={`${deleteLabel}: ${address.name}`}
                  >
                    {deleteLabel}
                  </AddressActionButton>
                  {defaultAddressIdState !== address.id && (
                    <AddressActionButton
                      address={address}
                      action={async function (lastResult, formData) {
                        const response = await setDefaultAddressAction(lastResult, formData)

                        setDefaultAddressIdState(response.id)

                        return response
                      }}
                      aria-label={`${setDefaultLabel}: ${address.name}`}
                    >
                      {setDefaultLabel}
                    </AddressActionButton>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function AddressPreview({ address, isDefault }: { address: Address; isDefault?: boolean }) {
  return (
    <div className="flex gap-10">
      <div className="text-sm">
        <p className="font-bold">{address.name}</p>
        <p>{address.street1}</p>
        <p>{address.street2}</p>
        <p>
          {address.city}, {address.state} {address.zipcode}
        </p>
        <p>{address.country}</p>
      </div>
      <div>{isDefault && <Badge>Default</Badge>}</div>
    </div>
  )
}

function AddressActionButton({
  address,
  action,
  ...rest
}: {
  address: Address
  action: Action<{ id: string; lastResult: SubmissionResult | null }, FormData>
} & React.ComponentProps<'button'>) {
  const [, formAction, isPending] = useActionState(action, {
    id: address.id,
    lastResult: null,
  })

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={address.id} />
      <Button {...rest} variant="tertiary" size="small" type="submit" loading={isPending} />
    </form>
  )
}

function AddressForm({
  address,
  action,
  onCancel,
  cancelLabel = 'Cancel',
  submitLabel = 'Submit',
  addressLine1Label = 'Address Line 1',
  addressLine2Label = 'Address Line 1',
  addressLevel1Label = 'State/Province',
  addressLevel2Label = 'City/Town',
  countryLabel = 'Country',
  postalCodeLabel = 'Postal code',
}: {
  address: Address
  action: Action<{ address: Address; lastResult: SubmissionResult | null }, FormData>
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void
  cancelLabel?: string
  submitLabel?: string
  addressLine1Label?: string
  addressLine2Label?: string
  addressLevel1Label?: string
  addressLevel2Label?: string
  countryLabel?: string
  postalCodeLabel?: string
}) {
  const [state, formAction, isPending] = useActionState(action, { address, lastResult: null })
  const [form, fields] = useForm({
    lastResult: state.lastResult,
    defaultValue: state.address,
    constraint: getZodConstraint(schema),
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema })
    },
  })

  useEffect(() => {
    if (state.lastResult?.error) console.log(state.lastResult?.error)
  }, [state.lastResult?.error])

  return (
    <form {...getFormProps(form)} action={formAction} className="w-[480px] space-y-4">
      <input {...getInputProps(fields.id, { type: 'hidden' })} key={fields.id.id} />
      <Input
        label="Name"
        {...getInputProps(fields.name, { type: 'text' })}
        key={fields.name.id}
        autoComplete="off"
      />
      <Input
        {...getInputProps(fields.street1, { type: 'text' })}
        key={fields.street1.id}
        label={addressLine1Label}
        autoComplete={`section-${address.id} address-line1`}
      />
      <Input
        {...getInputProps(fields.street2, { type: 'text' })}
        key={fields.street2.id}
        label={addressLine2Label}
        autoComplete={`section-${address.id} address-line2`}
      />
      <div className="flex gap-4">
        <Input
          {...getInputProps(fields.state, { type: 'text' })}
          key={fields.state.id}
          label={addressLevel1Label}
          autoComplete={`section-${address.id} address-level1`}
        />
        <Input
          {...getInputProps(fields.city, { type: 'text' })}
          key={fields.city.id}
          label={addressLevel2Label}
          autoComplete={`section-${address.id} address-level2`}
        />
      </div>
      <div className="flex gap-4">
        <Input
          {...getInputProps(fields.country, { type: 'text' })}
          key={fields.country.id}
          label={countryLabel}
          autoComplete={`section-${address.id} country`}
        />
        <Input
          {...getInputProps(fields.zipcode, { type: 'text' })}
          key={fields.zipcode.id}
          label={postalCodeLabel}
          autoComplete={`section-${address.id} postal-code`}
        />
      </div>

      <div className="flex gap-1">
        <Button
          size="small"
          variant="tertiary"
          onClick={onCancel}
          aria-label={`${cancelLabel} ${submitLabel} ${address.name}`}
        >
          {cancelLabel}
        </Button>
        <Button
          type="submit"
          size="small"
          loading={isPending}
          aria-label={`${submitLabel} ${address.name}`}
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  )
}
