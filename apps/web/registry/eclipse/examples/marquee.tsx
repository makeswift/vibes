import { Marquee } from '@/registry/eclipse/components/marquee'

export default function Preview() {
  const logos = [
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },

    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
    {
      logoImage: {
        url: '/logo-placeholder.svg',
        dimensions: { width: 800, height: 600 },
      },
      logoAlt: '',
      logoWidth: 120,
    },
  ]

  return (
    <div className="flex min-h-48 items-center justify-center overflow-hidden bg-[#07090D] py-5 sm:min-h-64 sm:py-8 lg:min-h-80 lg:py-12">
      <Marquee className="w-full" logos={logos} />
    </div>
  )
}
