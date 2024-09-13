import { ProductDescription } from '@/vibes/soul/components/product-description'

export const accordions = [
  {
    title: 'What is your return policy?',
    content:
      'We want you to be completely satisfied with your purchase. If you’re not happy with your bike pack, you can return it within 30 days of delivery. Please ensure the pack is in its original condition and packaging. For detailed return instructions, visit our Return Policy page or contact our customer support team.',
  },
  {
    title: 'How do I care for my bike pack?',
    content:
      'Proper care of your bike pack ensures it lasts longer and performs well. Clean the pack regularly with mild soap and water, avoiding harsh chemicals that can damage the fabric. Store it in a cool, dry place when not in use. For more detailed care tips, check the Care Guide section on our website.',
  },
  {
    title: 'Do you offer delivery services for your bike packs?',
    content:
      'Yes, we offer nationwide delivery for all our bike packs. Each pack is carefully packaged to ensure it arrives in perfect condition. Delivery times vary depending on your location but typically range from 3 to 7 business days. For more information, visit our Delivery Information page or enter your zip code at checkout to see estimated delivery times.',
  },
  {
    title: 'Can I get advice on choosing the right bike pack?',
    content:
      'Absolutely! Choosing the right bike pack depends on your riding style, gear needs, and the type of terrain you tackle. Our Pack Finder tool can help you select the perfect pack based on your requirements. Additionally, our customer service team is available to provide personalized recommendations to suit your needs.',
  },
]

export const productDescriptionImage = {
  src: 'https://rstr.in/monogram/vibes/RJr9FNVonZG',
  altText: 'A close-up of a bicycle handlebar with a red OuterShell bag attached.',
}

const video = 'https://videos.pexels.com/video-files/4957753/4957753-hd_1920_1080_25fps.mp4'

export default function Preview() {
  return (
    <>
      <ProductDescription accordions={accordions} image={productDescriptionImage} />
      <ProductDescription accordions={accordions} video={video} />
    </>
  )
}
