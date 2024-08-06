import { Globe } from 'lucide-react'

import Navigation from '@/vibes/eclipse/components/navigation'

export default function Preview() {
  const mainMenuItems = [
    {
      id: '1',
      title: 'First Menu',
      description: 'First Description',
      subMenuItems: [
        {
          title: 'First Submenu',
          content: 'First Submenu Content',
          innerMenuItems: [
            {
              title: 'First Inner Menu #1',
              content: 'First Inner Menu Content',
              href: '#first-inner-menu',
              icon: <Globe />,
            },
            {
              title: 'Second Inner Menu #1',
              content: 'Second Inner Menu Content',
              href: '#second-inner-menu',
              icon: <Globe />,
            },
            {
              title: 'Third Inner Menu #1',
              content: 'Third Inner Menu Content',
              href: '#third-inner-menu',
              icon: <Globe />,
            },
            {
              title: 'Fourth Inner Menu #1',
              content: 'Fourth Inner Menu Content',
              href: '#fourth-inner-menu',
            },
            {
              title: 'Fifth Inner Menu #1',
              content: 'Fifth Inner Menu Content',
              href: '#fifth-inner-menu',
            },
          ],
        },
        {
          title: 'Second Submenu',
          content: 'Second Submenu Content',
          innerMenuItems: [
            {
              title: 'First Inner Menu #2',
              content: 'First Inner Menu Content',
              href: '#first-inner-menu',
              icon: <Globe />,
            },
            {
              title: 'Second Inner Menu #2',
              content: 'Second Inner Menu Content',
              href: '#second-inner-menu',
              icon: <Globe />,
            },
            {
              title: 'Third Inner Menu #2',
              content: 'Third Inner Menu Content',
              href: '#third-inner-menu',
            },
          ],
        },
      ],
      img: [
        {
          title: 'First Image',
          description: 'First Image Description',
          img: '/atom.svg',
          alt: 'First Image Alt',
        },
      ],
    },
    {
      id: '2',
      title: 'Second Menu',
      description: 'Second Description',
      subMenuItems: [
        {
          innerMenuItems: [
            {
              title: '2First Inner Menu',
              content: '2First Inner Menu Content',
              href: '#2first-inner-menu',
              icon: <Globe />,
            },
            {
              title: '2Second Inner Menu',
              content: '2Second Inner Menu Content',
              href: '#2second-inner-menu',
            },
            {
              title: '2Third Inner Menu',
              content: '2Third Inner Menu Content',
              href: '#2third-inner-menu',
            },
            {
              title: '2Fourth Inner Menu',
              content: '2Fourth Inner Menu Content',
              href: '#2fourth-inner-menu',
            },
            {
              title: '2Fifth Inner Menu',
              content: '2Fifth Inner Menu Content',
              href: '#2fifth-inner-menu',
            },
          ],
        },
      ],
      img: [
        {
          title: 'Callout header',
          description: 'This is a description about a really cool feature',
          img: '/react-icon-png.png',
          alt: 'First Image Alt',
        },
      ],
    },
    {
      id: '3',
      title: 'Third Menu',
      description: 'Third Description',
      subMenuItems: [
        {
          innerMenuItems: [
            {
              title: '3First Inner Menu',
              content: '3First Inner Menu Content',
              href: '#3first-inner-menu',
            },
            {
              title: '3Second Inner Menu',
              content: '3Second Inner Menu Content',
              href: '#3second-inner-menu',
            },
            {
              title: '3Third Inner Menu',
              content: '3Third Inner Menu Content',
              href: '#3third-inner-menu',
            },
            {
              title: '3Fourth Inner Menu',
              content: '3Fourth Inner Menu Content',
              href: '#3fourth-inner-menu',
            },
            {
              title: '3Fifth Inner Menu',
              content: '3Fifth Inner Menu Content',
              href: '#3fifth-inner-menu',
            },
          ],
        },
      ],
    },
    {
      id: '4',
      title: 'Fourth Menu',
      description: 'Fourth Description',
      subMenuItems: [
        {
          title: 'Fourth Submenu',
          content: 'Fourth Submenu Content',
          innerMenuItems: [
            {
              title: 'First Inner Menu',
              content: 'First Inner Menu Content',
              href: '#first-inner-menu',
            },
            {
              title: 'Second Inner Menu',
              content: 'Second Inner Menu Content',
              href: '#second-inner-menu',
            },
            {
              title: 'Third Inner Menu',
              content: 'Third Inner Menu Content',
              href: '#third-inner-menu',
            },
            {
              title: 'Fourth Inner Menu',
              content: 'Fourth Inner Menu Content',
              href: '#fourth-inner-menu',
            },
            {
              title: 'Fifth Inner Menu',
              content: 'Fifth Inner Menu Content',
              href: '#fifth-inner-menu',
            },
          ],
        },
        {
          title: 'Fifth Submenu',
          content: 'Fifth Submenu Content',
          innerMenuItems: [
            {
              title: 'First Inner Menu #4',
              content: 'First Inner Menu Content',
              href: '#first-inner-menu',
            },
            {
              title: '2Second Inner Menu',
              content: '2Second Inner Menu Content',
              href: '#2second-inner-menu',
            },
            {
              title: '2Third Inner Menu',
              content: '2Third Inner Menu Content',
              href: '#2third-inner-menu',
            },
          ],
        },
      ],
    },
    {
      id: '5',
      title: 'Pricing',
      description: 'Pricing Description',
      href: '/pricing',
      subMenuItems: [],
    },
  ]

  const secondaryMenuItems = [{ title: 'Login', href: '/login' }]

  return (
    <div className="flex h-48 items-start bg-[#07090D] sm:h-64 lg:h-96">
      <Navigation
        logoImage="/logo-placeholder.svg"
        mainMenuItems={mainMenuItems}
        secondaryMenuItems={secondaryMenuItems}
        fixed={true}
      />
    </div>
  )
}
