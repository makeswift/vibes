import { ComponentPropsWithoutRef } from 'react';

import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/electric';
import { Streamable } from '@/vibes/soul/lib/streamable';
import { AnimatedLink } from '@/vibes/soul/primitives/animated-link';
import { Price } from '@/vibes/soul/primitives/price-label';
import { ProductDetail } from '@/vibes/soul/sections/product-detail';
import { Field } from '@/vibes/soul/sections/product-detail/schema';

import { action, fields } from './action';

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

export const product = {
  id: '1',
  subtitle: 'Indoor Plants',
  title: 'Caladium Rosebud',
  price: '$19.95',
  image: {
    src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt',
    alt: 'Caladium Rosebud',
  },
  images: [
    { src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt', alt: 'Caladium Rosebud' },
    {
      src: 'https://rstr.in/monogram/vibes/FDRjvGlh8JT',
      alt: 'Caladium Rosebud Detail',
    },
    {
      src: 'https://rstr.in/monogram/vibes/D1uDyHea7f0',
      alt: 'Caladium Rosebud Detail',
    },
    {
      src: 'https://rstr.in/monogram/vibes/4xDOP4qM9cC',
      alt: 'Caladium Rosebud Detail',
    },
  ],
  href: '#',
  rating: 4.8,
  summary:
    'The Caladium Rosebud plant features vibrant pink and green heart-shaped leaves, adding a beautiful pop of color to any indoor or outdoor setting.',
  description:
    'The Caladium Rosebud plant is a striking ornamental foliage plant known for its eye-catching heart-shaped leaves that boast a captivating blend of vibrant pink and lush green hues. The leaves often feature deep pink centers framed by contrasting green edges, creating a visually stunning pattern that draws attention in any setting. This tropical beauty thrives in warm, humid conditions and can be grown both indoors and outdoors, making it a versatile choice for home decor and garden landscapes. Its bold, colorful foliage adds a dynamic pop of color, transforming spaces into vibrant, nature-inspired retreats. The Caladium Rosebud is perfect for brightening shaded garden beds, patios, and living rooms, providing year-round visual appeal with its lush and lively presence.',
  accordions,
};

export default function Preview() {
  const breadcrumbsPromise = new Promise<
    Array<ComponentPropsWithoutRef<typeof AnimatedLink> & { id: string }>
  >((resolve) => {
    setTimeout(() => resolve(breadcrumbs), 1000);
  });

  const productPromise = new Promise<{
    id: string;
    title: string;
    href: string;
    images: Streamable<Array<{ src: string; alt: string }>>;
    price?: Streamable<Price | null>;
    subtitle?: string;
    badge?: string;
    rating?: Streamable<number | null>;
    description?: Streamable<string | React.ReactNode | null>;
  }>((resolve) => {
    setTimeout(() => resolve(product), 1500);
  });

  const fieldsPromise = new Promise<Field[]>((resolve) => {
    setTimeout(() => resolve(fields), 2000);
  });

  return (
    <ProductDetail
      action={action}
      breadcrumbs={breadcrumbsPromise}
      fields={fieldsPromise}
      product={productPromise}
    />
  );
}
