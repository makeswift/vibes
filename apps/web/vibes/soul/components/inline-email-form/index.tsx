import { ArrowRight } from 'lucide-react'

export const InlineEmailForm = function InlineEmailForm() {
  // action: (prevState: unknown, formData: FormData) => Promise<SubmissionResult>

  // const schema = z.object({
  //   email: z.string().email(),
  // })

  // const [lastResult, formAction] = useFormState(action, undefined)

  // const [form] = useForm({
  //   lastResult,
  //   onValidate({ formData }) {
  //     return parseWithZod(formData, { schema })
  //   },
  //   shouldValidate: 'onSubmit',
  //   shouldRevalidate: 'onInput',
  // })

  return (
    <form
      // id={form.id}
      className="w-full"
      // onSubmit={form.onSubmit}
      // action={formAction}
      noValidate
    >
      <div className="relative w-full max-w-5xl shrink-0 rounded-lg border border-contrast-100 bg-background text-[15px] ring-foreground transition-colors duration-200 focus-within:ring-[1px] focus:outline-none">
        <input
          type="email"
          placeholder="Join our Newsletter"
          className="placeholder-contrast-gray-500 w-full bg-transparent py-5 pl-5 pr-16 text-foreground placeholder:font-normal focus:outline-none"
        />

        <button
          // formAction={formAction}
          type="submit"
          className="group absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-foreground text-background ring-foreground transition-transform focus:outline-none focus:ring-[1px]"
        >
          <ArrowRight strokeWidth={1.5} size={20} aria-label="Submit" />
        </button>
      </div>
    </form>
  )
}

export default InlineEmailForm
