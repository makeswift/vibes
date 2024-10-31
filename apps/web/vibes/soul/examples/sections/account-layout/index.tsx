import { AccountLayout } from '@/vibes/soul/sections/account-layout'

const links = [
  { href: '#', label: 'Orders' },
  { href: '#', label: 'Messages' },
  { href: '#', label: 'Addresses' },
  { href: '#', label: 'Account' },
]

export default function Preview() {
  return <AccountLayout links={links}>Put some stuff here!</AccountLayout>
}
