'use client'

import Newsletter from '@/vibes/2px/components/newsletter-section'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-5 bg-background sm:min-h-64 lg:min-h-80">
      <Newsletter
        title="Sign up for our newsletter"
        action={async (formData: FormData) => {
          //sleep(2000)
          await new Promise(resolve => setTimeout(resolve, 2000))

          const shouldFail = Math.random() > 0.5

          if (shouldFail) {
            throw new Error('Email is required')
          }

          console.log('Email:', formData.get('email'))
        }}
        description="Get the latest updates and insights delivered to your inbox"
        successMessage="Thanks for signing up to our newsletter."
        errorMessage="There has been a system error. Please, send your form again. "
      />
    </div>
  )
}
