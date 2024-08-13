import InlineEmailForm from '@/vibes/soul/components/inline-email-form'

interface Props {
  title: string
  description: string
}

export const SubscribeBasic = function SubscribeBasic({ title, description }: Props) {
  return (
    <section className="@container">
      <div className="flex w-full flex-col items-center gap-x-10 gap-y-12 px-3 py-20 @xl:px-6 @2xl:flex-row @5xl:px-20">
        <div className="w-full">
          <h2 className="mb-2 text-4xl font-medium leading-none @7xl:text-5xl">{title}</h2>
          <p className="text-[15px] opacity-50">{description}</p>
        </div>
        <InlineEmailForm />
      </div>
    </section>
  )
}

export default SubscribeBasic
