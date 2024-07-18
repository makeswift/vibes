import { Toast } from '@/vibes/eclipse/components/toast'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Toast
        title="Thank you!"
        description="Your message has been sent"
        open={true}
        onOpenChange={() => {}}
      />
      <Toast
        title="An error occurred"
        description="Please try again"
        open={true}
        onOpenChange={() => {}}
      />
    </div>
  )
}
