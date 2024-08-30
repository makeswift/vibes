import ProductDescription from '@/vibes/soul/components/product-description'

export const accordions = [
  {
    title: 'What is your return policy?',
    content:
      'We want you to be completely satisfied with your purchase. If you’re not happy with your plant, you can return it within 30 days of delivery. Please ensure the plant is in its original condition and packaging. For detailed return instructions, visit our Return Policy page or contact our customer support team.',
  },
  {
    title: 'How do I care for my new plants?',
    content:
      'Caring for your new plants involves understanding their specific needs. Most indoor plants require indirect sunlight, regular watering, and occasional feeding. Check the plant care tag that comes with your purchase for detailed instructions. If you need more help, our Care Guide section offers detailed advice for each plant type.',
  },
  {
    title: 'Do you offer plant delivery services?',
    content:
      'Yes, we offer nationwide delivery for all our plants. Our plants are carefully packaged to ensure they arrive healthy and safe. Delivery times vary depending on your location but typically range from 3 to 7 business days. For more information, check our Delivery Information page or enter your zip code at checkout for estimated delivery times.',
  },
  {
    title: 'Can I get advice on choosing the right plant?',
    content:
      'Absolutely! Choosing the right plant can depend on several factors such as your living space, light availability, and personal preferences. Our Plant Finder tool can help you select the perfect plant for your environment. Additionally, our customer service team is available to offer personalized recommendations based on your needs.',
  },
]

export const productDescriptionImage = {
  src: 'https://rstr.in/monogram/vibes/D1uDyHea7f0',
  altText: 'Close-up of a green and white leaf with a pink background.',
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
