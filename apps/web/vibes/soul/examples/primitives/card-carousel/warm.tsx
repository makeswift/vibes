import { CardCarousel } from '@/vibes/soul/primitives/card-carousel';

export const cards = [
  {
    id: '1',
    title: 'Handlebar Bags',
    image: {
      src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
      alt: 'Handlebar Bags',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Frame Bags',
    image: {
      src: 'https://rstr.in/monogram/vibes/uh4Y3aF2rqO/KBtATLbT344',
      alt: 'Frame Bags',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Seat Bags',
    image: { src: 'https://rstr.in/monogram/vibes/MZX8-yya26e', alt: 'Seat Bags' },
    href: '#',
  },
  {
    id: '4',
    title: 'Rack Bags',
    image: { src: 'https://rstr.in/monogram/vibes/BplFmXgFkEY/Y6W895XQAah', alt: 'Succulent' },
    href: '#',
  },
];

export default function Preview() {
  return (
    <div>
      <section className="overflow-hidden @container">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <CardCarousel className="w-full" cards={cards} iconColorScheme="dark" />
        </div>
      </section>
      <section className="overflow-hidden bg-foreground @container">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <CardCarousel
            className="w-full"
            cards={cards}
            textColorScheme="dark"
            iconColorScheme="dark"
          />
        </div>
      </section>
    </div>
  );
}
