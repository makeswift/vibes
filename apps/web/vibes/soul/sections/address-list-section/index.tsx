'use client'

import { startTransition, useActionState, useEffect, useOptimistic, useState } from 'react'

import { SubmissionResult, getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { z } from 'zod'

import { Input } from '@/vibes/soul/form/input'
import { Badge } from '@/vibes/soul/primitives/badge'
import { Button } from '@/vibes/soul/primitives/button'
import { Spinner } from '@/vibes/soul/primitives/spinner'

import { schema } from './schema'

export type Address = z.infer<typeof schema>

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

type State<A extends Address> = {
  addresses: A[]
  defaultAddressId: string
  lastResult: SubmissionResult | null
}

type Props<A extends Address> = {
  title?: string
  addresses: A[]
  defaultAddressId: string
  addressAction: Action<State<A>, FormData>
  editLabel?: string
  deleteLabel?: string
  updateLabel?: string
  createLabel?: string
  showAddFormLabel?: string
  setDefaultLabel?: string
  cancelLabel?: string
  firstNameLabel?: string
  lastNameLabel?: string
  companyLabel?: string
  phoneLabel?: string
  addressLine1Label?: string
  addressLine2Label?: string
  addressLevel1Label?: string
  addressLevel2Label?: string
  countryLabel?: string
  postalCodeLabel?: string
}

export function AddressListSection<A extends Address>({
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
  firstNameLabel,
  lastNameLabel,
  companyLabel,
  phoneLabel,
  addressLine1Label,
  addressLine2Label,
  addressLevel1Label,
  addressLevel2Label,
  countryLabel,
  postalCodeLabel,
}: Props<A>) {
  const [state, formAction, isPending] = useActionState(addressAction, {
    addresses,
    defaultAddressId,
    lastResult: null,
  })

  const [optimisticState, setOptimisticState] = useOptimistic<State<Address>, FormData>(
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
                firstName: '',
                lastName: '',
                street1: '',
                street2: '',
                city: '',
                state: '',
                country: '',
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
              firstNameLabel={firstNameLabel}
              lastNameLabel={lastNameLabel}
              companyLabel={companyLabel}
              phoneLabel={phoneLabel}
              addressLine1Label={addressLine1Label}
              addressLine2Label={addressLine2Label}
              addressLevel1Label={addressLevel1Label}
              addressLevel2Label={addressLevel2Label}
              postalCodeLabel={postalCodeLabel}
              countryLabel={countryLabel}
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
                firstNameLabel={firstNameLabel}
                lastNameLabel={lastNameLabel}
                companyLabel={companyLabel}
                phoneLabel={phoneLabel}
                addressLine1Label={addressLine1Label}
                addressLine2Label={addressLine2Label}
                addressLevel1Label={addressLevel1Label}
                addressLevel2Label={addressLevel2Label}
                postalCodeLabel={postalCodeLabel}
                countryLabel={countryLabel}
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
                    aria-label={`${editLabel}: ${address.firstName} ${address.lastName}`}
                  >
                    {editLabel}
                  </Button>
                  {optimisticState.defaultAddressId !== address.id && (
                    <>
                      <AddressActionButton
                        intent="delete"
                        aria-label={`${deleteLabel}: ${address.firstName} ${address.lastName}`}
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
                      <AddressActionButton
                        intent="setDefault"
                        aria-label={`${setDefaultLabel}: ${address.firstName} ${address.lastName}`}
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
                    </>
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
        <p className="font-bold">
          {address.firstName} {address.lastName}
        </p>
        <p>{address.company}</p>
        <p>{address.street1}</p>
        <p>{address.street2}</p>
        <p>
          {address.city}, {address.state} {address.postalCode}
        </p>
        <p className="mb-3">{address.country}</p>
        <p>{address.phone}</p>
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
      <input {...getInputProps(fields.firstName, { type: 'hidden' })} key={fields.firstName.id} />
      <input {...getInputProps(fields.lastName, { type: 'hidden' })} key={fields.lastName.id} />
      <input {...getInputProps(fields.company, { type: 'hidden' })} key={fields.company.id} />
      <input {...getInputProps(fields.phone, { type: 'hidden' })} key={fields.phone.id} />
      <input {...getInputProps(fields.street1, { type: 'hidden' })} key={fields.street1.id} />
      <input {...getInputProps(fields.street2, { type: 'hidden' })} key={fields.street2.id} />
      <input {...getInputProps(fields.city, { type: 'hidden' })} key={fields.city.id} />
      <input {...getInputProps(fields.state, { type: 'hidden' })} key={fields.state.id} />
      <input {...getInputProps(fields.postalCode, { type: 'hidden' })} key={fields.postalCode.id} />
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
  firstNameLabel = 'First name',
  lastNameLabel = 'Last name',
  companyLabel = 'Company',
  phoneLabel = 'Phone',
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
  firstNameLabel?: string
  lastNameLabel?: string
  companyLabel?: string
  phoneLabel?: string
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
      <div className="flex gap-4">
        <Input
          {...getInputProps(fields.firstName, { type: 'text' })}
          label={firstNameLabel}
          key={fields.firstName.id}
          errors={fields.firstName.errors}
          autoComplete="off"
          data-1p-ignore
          data-lpignore
        />
        <Input
          {...getInputProps(fields.lastName, { type: 'text' })}
          label={lastNameLabel}
          key={fields.lastName.id}
          errors={fields.lastName.errors}
          autoComplete="off"
          data-1p-ignore
          data-lpignore
        />
      </div>

      <Input
        {...getInputProps(fields.company, { type: 'text' })}
        key={fields.company.id}
        label={companyLabel}
        errors={fields.company.errors}
        autoComplete={`section-${address.id} company`}
      />
      <Input
        {...getInputProps(fields.phone, { type: 'tel' })}
        key={fields.phone.id}
        label={phoneLabel}
        errors={fields.phone.errors}
        autoComplete={`section-${address.id} phone`}
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
          {...getInputProps(fields.postalCode, { type: 'text' })}
          key={fields.postalCode.id}
          label={postalCodeLabel}
          errors={fields.postalCode.errors}
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
          aria-label={`${cancelLabel} ${submitLabel} ${address.firstName} ${address.lastName}`}
        >
          {cancelLabel}
        </Button>
        <Button
          type="submit"
          size="small"
          name="intent"
          value={intent}
          aria-label={`${submitLabel} ${address.firstName} ${address.lastName}`}
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  )
}
