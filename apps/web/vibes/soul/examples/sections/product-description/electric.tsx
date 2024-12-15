import { ReactNode } from 'react';

import { ProductDescription } from '@/vibes/soul/sections/product-description';

export const accordions = [
  {
    title: 'What is your return policy?',
    content: (
      <div className="w-[700px] max-w-full">
        We want you to be completely satisfied with your purchase. If you’re not happy with your
        plant, you can return it within 30 days of delivery. Please ensure the plant is in its
        original condition and packaging. For detailed return instructions, visit our Return Policy
        page or contact our customer support team.
      </div>
    ),
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
];

export const productDescriptionImage = {
  src: 'https://rstr.in/monogram/vibes/D1uDyHea7f0',
  alt: 'Close-up of a green and white leaf with a pink background.',
};

export default function Preview() {
  const accordionsPromise = new Promise<Array<{ title: string; content: ReactNode }>>((res) =>
    setTimeout(() => res(accordions), 2000),
  );

  const imagePromise = new Promise<{ src: string; alt: string }>((res) =>
    setTimeout(() => res(productDescriptionImage), 1000),
  );

  return (
    <>
      <ProductDescription accordions={accordionsPromise} image={imagePromise} />
    </>
  );
}
