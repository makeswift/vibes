import { PricingCards } from '@/vibes/eclipse/components/pricing-cards'

export default function Preview() {
  const cards = [
    {
      name: 'Basic',
      hidePrice: false,
      monthlyPrice: '$9',
      annualPrice: '$99',
      discount: '20',
      mainFeatures: [{ text: 'Feature 1' }, { text: 'Feature 2' }, { text: 'Feature 3' }],
      ctaLink: {
        href: '/subscribe/basic',
        target: '_self' as const,
      },
      ctaText: 'Subscribe',
      topGlow: false,
    },
    {
      name: 'Pro',
      hidePrice: false,
      monthlyPrice: '$19',
      annualPrice: '$199',
      discount: '30',
      mainFeatures: [{ text: 'Feature 1' }, { text: 'Feature 2' }, { text: 'Feature 3' }],
      ctaLink: {
        href: '/subscribe/pro',
        target: '_self' as const,
      },
      ctaText: 'Subscribe',
      topGlow: true,
    },
    {
      name: 'Premium',
      hidePrice: false,
      monthlyPrice: '$29',
      annualPrice: '$299',
      discount: '40',
      mainFeatures: [{ text: 'Feature 1' }, { text: 'Feature 2' }, { text: 'Feature 3' }],
      ctaLink: {
        href: '/subscribe/premium',
        target: '_self' as const,
      },
      ctaText: 'Subscribe',
      topGlow: false,
    },
  ]

  return (
    <div className="flex min-h-48 items-center justify-center overflow-hidden bg-[#07090D] px-5 py-12 sm:min-h-64 sm:px-6 lg:min-h-80 lg:px-8">
      <PricingCards className="w-full" cards={cards} />
    </div>
  )
}
