'use client'

import { startTransition, useActionState, useEffect, useOptimistic, useState } from 'react'

import {
  FormMetadata,
  Submission,
  SubmissionResult,
  getFormProps,
  getInputProps,
  useForm,
} from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { z } from 'zod'

import { Input } from '@/vibes/soul/form/input'
import { Badge } from '@/vibes/soul/primitives/badge'
import { Button } from '@/vibes/soul/primitives/button'

import { Spinner } from '../../primitives/spinner'
import { addressSchema, idSchema } from './schema'

export type Address = z.infer<typeof addressSchema>

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

type Props = {
  title?: string
  addresses: Address[]
  defaultAddressId: string
  updateAddressAction: Action<{ address: Address; lastResult: SubmissionResult | null }, FormData>
  deleteAddressAction: Action<{ id: string; lastResult: SubmissionResult | null }, FormData>
  createAddressAction: Action<
    { address: Address | null; lastResult: SubmissionResult | null },
    FormData
  >
  setDefaultAddressAction: Action<{ id: string; lastResult: SubmissionResult | null }, FormData>
  editLabel?: string
  deleteLabel?: string
  updateLabel?: string
  createLabel?: string
  cancelLabel?: string
  showAddFormLabel?: string
  setDefaultLabel?: string
}

type State = {
  addresses: Address[]
  defaultAddressId: string
  lastResult: SubmissionResult | null
}

type Payload =
  | {
      type: 'create' | 'update'
      formData: FormData
      submission: Submission<Address>
    }
  | {
      type: 'delete' | 'setDefault'
      formData: FormData
      submission: Submission<{ id: string }>
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
  const [state, action, isPending] = useActionState<State, Payload>(
    async function (prevState, action) {
      switch (action.type) {
        case 'create': {
          if (action.submission.status !== 'success') return prevState

          const nextAddress = action.submission.value
          const prevAddress = prevState.addresses.find(a => a.id === nextAddress.id)

          const response = await createAddressAction(
            { address: prevAddress ?? null, lastResult: prevState.lastResult },
            action.formData
          )

          if (response.address == null) return prevState

          return {
            ...prevState,
            addresses: [...prevState.addresses, response.address],
          }
        }
        case 'update': {
          if (action.submission.status !== 'success') return prevState

          const nextAddress = action.submission.value
          const prevAddress = prevState.addresses.find(a => a.id === nextAddress.id)

          if (!prevAddress) return prevState

          const response = await updateAddressAction(
            { address: prevAddress, lastResult: prevState.lastResult },
            action.formData
          )

          return {
            ...prevState,
            addresses: prevState.addresses.map(a =>
              a.id === response.address.id ? response.address : a
            ),
          }
        }
        case 'delete': {
          if (action.submission.status !== 'success') return prevState

          const { id } = action.submission.value

          const response = await deleteAddressAction(
            { id, lastResult: prevState.lastResult },
            action.formData
          )

          return {
            ...prevState,
            addresses: prevState.addresses.filter(a => a.id !== response.id),
          }
        }
        case 'setDefault': {
          if (action.submission.status !== 'success') return prevState

          const { id } = action.submission.value

          const response = await setDefaultAddressAction(
            { id, lastResult: prevState.lastResult },
            action.formData
          )

          return { ...prevState, defaultAddressId: response.id }
        }
      }
    },
    { addresses, defaultAddressId, lastResult: null }
  )
  const [optimisticState, setOptimisticState] = useOptimistic<State, Payload>(
    state,
    (prevState, action) => {
      switch (action.type) {
        case 'create': {
          if (action.submission.status !== 'success') return prevState

          const nextAddress = action.submission.value

          return {
            ...prevState,
            addresses: [...prevState.addresses, nextAddress],
          }
        }
        case 'update': {
          if (action.submission.status !== 'success') return prevState

          const nextAddress = action.submission.value
          const prevAddress = prevState.addresses.find(a => a.id === nextAddress.id)

          if (!prevAddress) return prevState

          return {
            ...prevState,
            addresses: prevState.addresses.map(a => (a.id === nextAddress.id ? nextAddress : a)),
          }
        }
        case 'delete': {
          if (action.submission.status !== 'success') return prevState

          const { id } = action.submission.value

          return {
            ...prevState,
            addresses: prevState.addresses.filter(a => a.id !== id),
          }
        }
        case 'setDefault': {
          if (action.submission.status !== 'success') return prevState

          const { id } = action.submission.value

          return { ...prevState, defaultAddressId: id }
        }
      }
    }
  )
  const [activeAddressIds, setActiveAddressIds] = useState<string[]>([])
  const [showNewAddressForm, setShowNewAddressForm] = useState(false)

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl">
          {title}
          {isPending && (
            <span className="ml-2">
              <Spinner />
            </span>
          )}
        </h1>
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
              onSubmit={async function (event, { formData, submission }) {
                event.preventDefault()

                if (submission?.status !== 'success') return

                setShowNewAddressForm(false)

                startTransition(async () => {
                  action({ type: 'create', formData, submission })
                  setOptimisticState({ type: 'create', formData, submission })
                })
              }}
              onCancel={() => setShowNewAddressForm(false)}
              cancelLabel={cancelLabel}
              submitLabel={createLabel}
            />
          </div>
        )}
        {optimisticState.addresses.map(address => (
          <div key={address.id} className="border-b border-contrast-200 pb-6 pt-5">
            {activeAddressIds.includes(address.id) ? (
              <AddressForm
                address={address}
                onSubmit={async function (event, { formData, submission }) {
                  event.preventDefault()

                  if (submission?.status !== 'success') return

                  setActiveAddressIds(prev => prev.filter(id => id !== address.id))

                  startTransition(async () => {
                    action({ type: 'update', formData, submission })
                    setOptimisticState({ type: 'update', formData, submission })
                  })
                }}
                onCancel={() => setActiveAddressIds(prev => prev.filter(id => id !== address.id))}
                cancelLabel={cancelLabel}
                submitLabel={updateLabel}
              />
            ) : (
              <div className="space-y-4">
                <AddressPreview
                  address={address}
                  isDefault={optimisticState.defaultAddressId === address.id}
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
                    onSubmit={async function (event, { formData, submission }) {
                      event.preventDefault()

                      if (submission?.status !== 'success') return

                      startTransition(async () => {
                        action({ type: 'delete', formData, submission })
                        setOptimisticState({ type: 'delete', formData, submission })
                      })
                    }}
                  >
                    {deleteLabel}
                  </AddressActionButton>
                  {optimisticState.defaultAddressId !== address.id && (
                    <AddressActionButton
                      aria-label={`${setDefaultLabel}: ${address.name}`}
                      address={address}
                      onSubmit={async function (event, { formData, submission }) {
                        event.preventDefault()

                        if (submission?.status !== 'success') return

                        startTransition(async () => {
                          action({ type: 'setDefault', formData, submission })
                          setOptimisticState({ type: 'setDefault', formData, submission })
                        })
                      }}
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

type OnSubmit<Schema> = (
  event: React.FormEvent<HTMLFormElement>,
  context: { submission?: Submission<Schema>; formData: FormData }
) => void

function AddressActionButton({
  address,
  onSubmit,
  ...rest
}: {
  address: Address
  onSubmit: OnSubmit<{ id: string }>
} & Omit<React.ComponentProps<'button'>, 'onSubmit'>) {
  const [form, fields] = useForm({
    defaultValue: { id: address.id },
    constraint: getZodConstraint(idSchema),
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: idSchema })
    },
    onSubmit,
  })
  return (
    <form {...getFormProps(form)}>
      <input {...getInputProps(fields.id, { type: 'hidden' })} key={fields.id.id} />
      <Button {...rest} variant="tertiary" size="small" type="submit" />
    </form>
  )
}

function AddressForm({
  address,
  lastResult,
  onCancel,
  onSubmit,
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
  onSubmit: OnSubmit<Address>
  lastResult?: SubmissionResult | null
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
  const [form, fields] = useForm({
    lastResult,
    defaultValue: address,
    constraint: getZodConstraint(addressSchema),
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: addressSchema })
    },
    onSubmit,
  })

  useEffect(() => {
    if (lastResult?.error) console.log(lastResult?.error)
  }, [lastResult?.error])

  return (
    <form {...getFormProps(form)} className="w-[480px] space-y-4">
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
        <Button type="submit" size="small" aria-label={`${submitLabel} ${address.name}`}>
          {submitLabel}
        </Button>
      </div>
    </form>
  )
}
