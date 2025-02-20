import { breadcrumbs } from '@/vibes/soul/examples/sections/breadcrumbs/warm';
import { Streamable } from '@/vibes/soul/lib/streamable';
import { Price } from '@/vibes/soul/primitives/price-label';
import { BreadcrumbWithId } from '@/vibes/soul/sections/breadcrumbs';
import { ProductDetail } from '@/vibes/soul/sections/product-detail';
import { Field } from '@/vibes/soul/sections/product-detail/schema';

import { action, fields } from './action';

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
];

export const product = {
  id: '1',
  title: 'Mini Bar Bag',
  price: '$60',
  image: {
    src: 'https://rstr.in/monogram/vibes/5IdIE27Cj9r',
    alt: 'A close-up of a bicycle handlebar with a brown handlebar bag.',
  },
  images: [
    {
      src: 'https://rstr.in/monogram/vibes/5IdIE27Cj9r',
      alt: 'A close-up of a bicycle handlebar with a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/3dmqcoTLHrK',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/D9gxhIajApp',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/T9YaFuqsEWp',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/Nsj4qcMks2D',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/uuhJbt607Ve',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/MIh7shsUtXg',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/44Z0ObxFdrL',
      alt: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/yl3MSuQta1C',
      alt: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/RJr9FNVonZG',
      alt: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/EVfQoHIUYf2',
      alt: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/h1YtCgM_Jqx',
      alt: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/INqNEFs7p_o',
      alt: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
  ],
  href: '#',
  rating: 4.8,
  summary:
    'A sleek, versatile bike bag designed to fit various bikes while holding essentials like snacks, phone, and tools. Multiple mounts ensure a secure, streamlined fit.',
  description:
    'Svelte and functional, this is one bag that goes well with every bike. We made this smaller so it fits little bikes and still carries the essentials - snacks, wallet, phone, keys, a tube, and tools. With multiple mounting positions, the fit can be dialed for short head-tubed mountain bikes, long stemmed road bikes, and everything in-between. The slim top edge is designed to fit behind mountain bike cables and tuck up neatly under computers, lights, and other accessories.',
  // options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  accordions,
};

export default function Preview() {
  const breadcrumbsPromise = new Promise<BreadcrumbWithId[]>((resolve) => {
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
