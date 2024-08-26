import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import Header from '@/vibes/soul/components/header'
import { headerLinks } from '@/vibes/soul/examples/header-warm'

const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export default function Preview() {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>

      <Header
        links={headerLinks}
        logo="Outer Shell"
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocale="EN"
      />
    </>
  )
}
