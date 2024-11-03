import { Button } from '@/vibes/soul/primitives/button'
import { SignInSection } from '@/vibes/soul/sections/sign-in-section'

import { signInAction } from './actions'

export default function Preview() {
  return (
    <SignInSection action={signInAction} forgotPasswordHref="#">
      <h2 className="mb-10 text-4xl font-medium leading-none @xl:text-5xl">New Customer?</h2>
      <p>Create an account with us and you&apos;ll be able to:</p>
      <ul className="mb-10 ml-4 mt-4 list-disc">
        <li>Check out faster</li>
        <li>Save multiple shipping addresses</li>
        <li>Access your order history</li>
        <li>Track new orders</li>
        <li>Save items to your Wish List</li>
      </ul>
      <Button variant="secondary" className="mt-auto w-full">
        Create Account
      </Button>
    </SignInSection>
  )
}
