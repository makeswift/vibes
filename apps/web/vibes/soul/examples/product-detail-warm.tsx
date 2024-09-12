import { ProductDetail } from '@/vibes/soul/components/product-detail'

export const product = {
  id: '1',
  name: 'Mini Bar Bag',
  price: '$60',
  image: {
    src: 'https://rstr.in/monogram/vibes/5IdIE27Cj9r',
    altText: 'A close-up of a bicycle handlebar with a brown handlebar bag.',
  },
  images: [
    {
      id: '1',
      src: 'https://rstr.in/monogram/vibes/5IdIE27Cj9r',
      altText: 'A close-up of a bicycle handlebar with a brown handlebar bag.',
    },
    {
      id: '2',
      src: 'https://rstr.in/monogram/vibes/3dmqcoTLHrK',
      altText: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      id: '3',
      src: 'https://rstr.in/monogram/vibes/D9gxhIajApp',
      altText: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      id: '4',
      src: 'https://rstr.in/monogram/vibes/T9YaFuqsEWp',
      altText: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      id: '5',
      src: 'https://rstr.in/monogram/vibes/Nsj4qcMks2D',
      altText: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      id: '6',
      src: 'https://rstr.in/monogram/vibes/uuhJbt607Ve',
      altText: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      id: '7',
      src: 'https://rstr.in/monogram/vibes/MIh7shsUtXg',
      altText: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      id: '8',
      src: 'https://rstr.in/monogram/vibes/44Z0ObxFdrL',
      altText: 'A close-up of a black road bike with white bar tape and a brown handlebar bag.',
    },
    {
      id: '9',
      src: 'https://rstr.in/monogram/vibes/yl3MSuQta1C',
      altText: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      id: '10',
      src: 'https://rstr.in/monogram/vibes/RJr9FNVonZG',
      altText: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      id: '11',
      src: 'https://rstr.in/monogram/vibes/EVfQoHIUYf2',
      altText: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      id: '12',
      src: 'https://rstr.in/monogram/vibes/h1YtCgM_Jqx',
      altText: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
    {
      id: '13',
      src: 'https://rstr.in/monogram/vibes/INqNEFs7p_o',
      altText: 'A close-up of a bicycle handlebar with a red handlebar bag attached.',
    },
  ],
  href: '#',
  rating: 4.8,
  description:
    'Svelte and functional, this is one bag that goes well with every bike. We made this smaller so it fits little bikes and still carries the essentials - snacks, wallet, phone, keys, a tube, and tools. With multiple mounting positions, the fit can be dialed for short head-tubed mountain bikes, long stemmed road bikes, and everything in-between. The slim top edge is designed to fit behind mountain bike cables and tuck up neatly under computers, lights, and other accessories.',
  // options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
}

export default function Preview() {
  return <ProductDetail product={product} />
}
