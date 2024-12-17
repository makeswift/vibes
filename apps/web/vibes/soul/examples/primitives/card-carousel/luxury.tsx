import { CardCarousel } from '@/vibes/soul/primitives/card-carousel';

export const cards = [
  {
    id: '1',
    title: 'Flats',
    image: { src: 'https://rstr.in/monogram/vibes/YXr3BKEq3T4/j4d8DXT8gGB', alt: 'Flats' },
    href: '#',
  },
  {
    id: '2',
    title: 'Boots',
    image: {
      src: 'https://rstr.in/monogram/vibes/EnWYvct7gIR',
      alt: 'Boots',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Loafers',
    image: {
      src: 'https://rstr.in/monogram/vibes/--JXxhCGkan',
      alt: 'Loafers',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Sneakers',
    image: { src: 'https://rstr.in/monogram/vibes/w8kVrtse8Id/mO9ju-R1-8L', alt: 'Sneakers' },
    href: '#',
  },
  {
    id: '5',
    title: 'Heels',
    image: { src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT', alt: 'Heels' },
    href: '#',
  },
];

export default function Preview() {
  return (
    <div>
      <section className="overflow-hidden @container">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <CardCarousel className="w-full" cards={cards} />
        </div>
      </section>
      <section className="overflow-hidden bg-foreground @container">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <CardCarousel className="w-full" cards={cards} textColorScheme="dark" />
        </div>
      </section>
    </div>
  );
}
