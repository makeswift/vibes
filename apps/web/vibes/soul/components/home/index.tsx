'use client'

import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import Header from '@/vibes/soul/components/header'
import Hero from '@/vibes/soul/components/hero'
import { headerLinks } from '@/vibes/soul/examples/header'
import { heroSlides } from '@/vibes/soul/examples/hero'

export type HomeProps = {}

export const Home = function Home({}: HomeProps) {
  return (
    <main className="">
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <Header links={headerLinks} logo={{ alt: 'SOUL' }} />
      <Hero slides={heroSlides} />
    </main>
  )
}

export default Home
