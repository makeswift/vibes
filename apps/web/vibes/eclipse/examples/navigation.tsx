import { Globe } from 'lucide-react'

import Navigation from '@/vibes/eclipse/components/navigation'

export default function Preview() {
  const mainMenuItems = [
    {
      title: 'First Menu',
      description: 'First Description',
      subMenuItems: [
        {
          title: 'First Submenu',
          description: 'First Submenu Content',
          innerMenuItems: [
            {
              title: 'First Inner Menu #1',
              description: 'First Inner Menu Content',
              href: '#first-inner-menu',
              icon: <Globe size={16} />,
            },
            {
              title: 'Second Inner Menu #1',
              description: 'Second Inner Menu Content',
              href: '#second-inner-menu',
              icon: <Globe size={16} />,
            },
            {
              title: 'Third Inner Menu #1',
              description: 'Third Inner Menu Content',
              href: '#third-inner-menu',
              icon: <Globe size={16} />,
            },
            {
              title: 'Fourth Inner Menu #1',
              description: 'Fourth Inner Menu Content',
              href: '#fourth-inner-menu',
              icon: <Globe size={16} />,
            },
            {
              title: 'Fifth Inner Menu #1',
              description: 'Fifth Inner Menu Content',
              href: '#fifth-inner-menu',
              icon: <Globe size={16} />,
            },
            {
              title: 'Sixth Inner Menu #1',
              description: 'Sixth Inner Menu Content',
              href: '#sixth-inner-menu',
              icon: <Globe size={16} />,
            },
            {
              title: 'Seventh Inner Menu #1',
              description: 'Seventh Inner Menu Content',
              href: '#seventh-inner-menu',
              icon: <Globe size={16} />,
            },
          ],
        },
        {
          title: 'Second Submenu',
          description: 'Second Submenu Content',
          innerMenuItems: [
            {
              title: 'First Inner Menu #2',
              description: 'First Inner Menu Content',
              href: '#first-inner-menu',
              icon: <Globe size={16} />,
            },
            {
              title: 'Second Inner Menu #2',
              description: 'Second Inner Menu Content',
              href: '#second-inner-menu',
              icon: <Globe size={16} />,
            },
            {
              title: 'Third Inner Menu #2',
              description: 'Third Inner Menu Content',
              href: '#third-inner-menu',
              icon: <Globe size={16} />,
            },
          ],
        },
      ],
    },
    {
      title: 'Second Menu',
      description: 'Second Description',
      subMenuItems: [
        {
          innerMenuItems: [
            {
              title: '2First Inner Menu',
              description: '2First Inner Menu Content',
              href: '#2first-inner-menu',
            },
            {
              title: '2Second Inner Menu',
              description: '2Second Inner Menu Content',
              href: '#2second-inner-menu',
            },
            {
              title: '2Third Inner Menu',
              description: '2Third Inner Menu Content',
              href: '#2third-inner-menu',
            },
            {
              title: '2Fourth Inner Menu',
              description: '2Fourth Inner Menu Content',
              href: '#2fourth-inner-menu',
            },
            {
              title: '2Fifth Inner Menu',
              description: '2Fifth Inner Menu Content',
              href: '#2fifth-inner-menu',
            },
          ],
        },
      ],
    },
    {
      title: 'Third Menu',
      description: 'Third Description',
      subMenuItems: [
        {
          innerMenuItems: [
            {
              title: '3First Inner Menu',
              description: '3First Inner Menu Content',
              href: '#3first-inner-menu',
            },
            {
              title: '3Second Inner Menu',
              description: '3Second Inner Menu Content',
              href: '#3second-inner-menu',
            },
            {
              title: '3Third Inner Menu',
              description: '3Third Inner Menu Content',
              href: '#3third-inner-menu',
            },
            {
              title: '3Fourth Inner Menu',
              description: '3Fourth Inner Menu Content',
              href: '#3fourth-inner-menu',
            },
            {
              title: '3Fifth Inner Menu',
              description: '3Fifth Inner Menu Content',
              href: '#3fifth-inner-menu',
            },
          ],
        },
      ],
    },
    {
      title: 'Pricing',
      href: '/pricing',
      subMenuItems: [],
    },
  ]

  const secondaryMenuItems = [{ title: 'Login', href: '/login' }]

  return (
    <div className="flex h-48 items-start bg-[#07090D] sm:h-64 lg:h-96">
      <Navigation
        logoImage="/logo-placeholder.svg"
        logoWidth={88}
        logoHeight={24}
        logoLink="/"
        mainMenuItems={mainMenuItems}
        secondaryMenuItems={secondaryMenuItems}
        ctaLink="/contact"
        ctaText="Contact Us"
      />
    </div>
  )
}
