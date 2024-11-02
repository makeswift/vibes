'use client'

import { startTransition, useActionState, useEffect, useOptimistic, useState } from 'react'

import { SubmissionResult, getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { z } from 'zod'

import { Input } from '@/vibes/soul/form/input'
import { Badge } from '@/vibes/soul/primitives/badge'
import { Button } from '@/vibes/soul/primitives/button'

import { Spinner } from '../../primitives/spinner'
import { schema } from './schema'

export type Address = z.infer<typeof schema>

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

type State = {
  addresses: Address[]
  defaultAddressId: string
  lastResult: SubmissionResult | null
}

type Props = {
  title?: string
  addresses: Address[]
  defaultAddressId: string
  addressAction: Action<State, FormData>
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
  addressAction,
  editLabel = 'Edit',
  deleteLabel = 'Delete',
  updateLabel = 'Update',
  createLabel = 'Create',
  cancelLabel = 'Cancel',
  showAddFormLabel = 'Add address',
  setDefaultLabel = 'Set as default',
}: Props) {
  const [state, formAction, isPending] = useActionState<State, FormData>(addressAction, {
    addresses,
    defaultAddressId,
    lastResult: null,
  })

  const [optimisticState, setOptimisticState] = useOptimistic<State, FormData>(
    state,
    (prevState, formData) => {
      const intent = formData.get('intent')
      const submission = parseWithZod(formData, { schema })

      if (submission.status !== 'success') return prevState

      switch (intent) {
        case 'create': {
          const nextAddress = submission.value

          return {
            ...prevState,
            addresses: [...prevState.addresses, nextAddress],
          }
        }
        case 'update': {
          return {
            ...prevState,
            addresses: prevState.addresses.map(a =>
              a.id === submission.value.id ? submission.value : a
            ),
          }
        }
        case 'delete': {
          return {
            ...prevState,
            addresses: prevState.addresses.filter(a => a.id !== submission.value.id),
          }
        }
        case 'setDefault': {
          return { ...prevState, defaultAddressId: submission.value.id }
        }
        default:
          return prevState
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
              intent="create"
              action={formAction}
              onSubmit={async function (formData) {
                setShowNewAddressForm(false)

                startTransition(async () => {
                  formAction(formData)
                  setOptimisticState(formData)
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
                intent="update"
                action={formAction}
                onSubmit={async function (formData) {
                  setActiveAddressIds(prev => prev.filter(id => id !== address.id))

                  startTransition(async () => {
                    formAction(formData)
                    setOptimisticState(formData)
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
                    intent="delete"
                    aria-label={`${deleteLabel}: ${address.name}`}
                    address={address}
                    action={formAction}
                    onSubmit={async function (formData) {
                      startTransition(async () => {
                        formAction(formData)
                        setOptimisticState(formData)
                      })
                    }}
                  >
                    {deleteLabel}
                  </AddressActionButton>
                  {optimisticState.defaultAddressId !== address.id && (
                    <AddressActionButton
                      intent="setDefault"
                      aria-label={`${setDefaultLabel}: ${address.name}`}
                      address={address}
                      action={formAction}
                      onSubmit={async function (formData) {
                        startTransition(async () => {
                          formAction(formData)
                          setOptimisticState(formData)
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

function AddressActionButton({
  address,
  intent,
  action,
  onSubmit,
  ...rest
}: {
  address: Address
  intent: string
  action(formData: FormData): void
  onSubmit(formData: FormData): void
} & Omit<React.ComponentProps<'button'>, 'onSubmit'>) {
  const [form, fields] = useForm({
    defaultValue: address,
    constraint: getZodConstraint(schema),
    onValidate({ formData }) {
      return parseWithZod(formData, { schema })
    },
    onSubmit(event, { submission, formData }) {
      event.preventDefault()

      if (submission?.status !== 'success') return

      onSubmit(formData)
    },
  })
  return (
    <form {...getFormProps(form)} action={action}>
      <input {...getInputProps(fields.id, { type: 'hidden' })} key={fields.id.id} />
      <input {...getInputProps(fields.name, { type: 'hidden' })} key={fields.name.id} />
      <input {...getInputProps(fields.street1, { type: 'hidden' })} key={fields.street1.id} />
      <input {...getInputProps(fields.street2, { type: 'hidden' })} key={fields.street2.id} />
      <input {...getInputProps(fields.city, { type: 'hidden' })} key={fields.city.id} />
      <input {...getInputProps(fields.state, { type: 'hidden' })} key={fields.state.id} />
      <input {...getInputProps(fields.zipcode, { type: 'hidden' })} key={fields.zipcode.id} />
      <input {...getInputProps(fields.country, { type: 'hidden' })} key={fields.country.id} />
      <Button
        {...rest}
        variant="tertiary"
        size="small"
        type="submit"
        name="intent"
        value={intent}
      />
    </form>
  )
}

function AddressForm({
  address,
  lastResult,
  onCancel,
  action,
  onSubmit,
  intent,
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
  intent: string
  action(formData: FormData): void
  onSubmit(formData: FormData): void
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
    constraint: getZodConstraint(schema),
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema })
    },
    onSubmit(event, { formData, submission }) {
      event.preventDefault()

      if (submission?.status !== 'success') return

      onSubmit(formData)
    },
  })

  useEffect(() => {
    if (lastResult?.error) console.log(lastResult?.error)
  }, [lastResult?.error])

  return (
    <form {...getFormProps(form)} action={action} className="w-[480px] space-y-4">
      <input {...getInputProps(fields.id, { type: 'hidden' })} key={fields.id.id} />
      <Input
        label="Name"
        {...getInputProps(fields.name, { type: 'text' })}
        key={fields.name.id}
        errors={fields.name.errors}
        autoComplete="off"
        data-1p-ignore
        data-lpignore
      />
      <Input
        {...getInputProps(fields.street1, { type: 'text' })}
        key={fields.street1.id}
        label={addressLine1Label}
        errors={fields.street1.errors}
        autoComplete={`section-${address.id} address-line1`}
      />
      <Input
        {...getInputProps(fields.street2, { type: 'text' })}
        key={fields.street2.id}
        label={addressLine2Label}
        errors={fields.street2.errors}
        autoComplete={`section-${address.id} address-line2`}
      />
      <div className="flex gap-4">
        <Input
          {...getInputProps(fields.city, { type: 'text' })}
          key={fields.city.id}
          label={addressLevel2Label}
          errors={fields.city.errors}
          autoComplete={`section-${address.id} address-level2`}
        />
        <Input
          {...getInputProps(fields.state, { type: 'text' })}
          key={fields.state.id}
          label={addressLevel1Label}
          errors={fields.state.errors}
          autoComplete={`section-${address.id} address-level1`}
        />
      </div>
      <div className="flex gap-4">
        <Input
          {...getInputProps(fields.zipcode, { type: 'text' })}
          key={fields.zipcode.id}
          label={postalCodeLabel}
          errors={fields.zipcode.errors}
          autoComplete={`section-${address.id} postal-code`}
        />
        <Input
          {...getInputProps(fields.country, { type: 'text' })}
          key={fields.country.id}
          label={countryLabel}
          errors={fields.country.errors}
          autoComplete={`section-${address.id} country`}
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
          name="intent"
          value={intent}
          aria-label={`${submitLabel} ${address.name}`}
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  )
}
