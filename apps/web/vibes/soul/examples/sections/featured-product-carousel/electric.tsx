import { FeaturedProductCarousel } from '@/vibes/soul/sections/featured-product-carousel';

export default function Preview() {
  const productsPromise = new Promise<Product[]>((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });

  return (
    <FeaturedProductCarousel
      cta={{ label: 'Shop Now', href: '#' }}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      products={productsPromise}
      title="Our plants"
    />
  );
}

interface Product {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  rating: number;
}

const products: Product[] = [
  {
    id: '1',
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    badge: 'Popular',
    price: '$44.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
      alt: 'Philodendron Imperial Red',
    },
    href: '#',
    rating: 4,
  },
  {
    id: '2',
    title: 'Monstera',
    subtitle: 'Indoor Plant',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyMTIwYzE1ZC01YzlkLTQ3MDgtOTZhOS1hZDkwYjVmNDAwZWY=/n0P83RMnClS%202930x3663.jpeg',
      alt: 'Monstera',
    },
    href: '#',
    rating: 4.4,
  },
  {
    id: '3',
    title: 'Pink Caladium',
    subtitle: 'Indoor Plant',
    price: '$19.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/AaZW4j2VTd4%202489x3111.jpeg',
      alt: 'Pink Caladium',
    },
    href: '#',
    rating: 4.8,
  },
  {
    id: '4',
    title: 'Hoya Kerrii',
    subtitle: 'Indoor Plant',
    price: '$16.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmZmRlZDM2MS0yMWMwLTRiYjktOTU2Ny1mNWM0YjcwMGIwZWQ=/QSaMw6aC_AN%208600x10750.jpeg',
      alt: 'Hoya Kerrii',
    },
    href: '#',
    rating: 2.2,
  },
  {
    id: '5',
    title: 'Bird Nest Fern',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplYTBhYzExNC1lYWIwLTQyZjAtYmQzZS04NDJlNmRlM2RkNTc=/gfGRQi5pHeJ%203094x3868.jpeg',
      alt: 'Bird Nest Fern',
    },
    href: '#',
    rating: 3.5,
  },
  {
    id: '6',
    title: 'Jade Plant',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozZWFjZDhlZi1lY2EzLTRiMzYtYTJkNS02ZGJkOWE4MzUwYjQ=/lJg081kQqvc.jpeg',
      alt: 'Jade Plant',
    },
    href: '#',
    rating: 5,
  },
  {
    id: '7',
    title: 'Snake Plant',
    subtitle: 'Indoor Plant',
    price: '$34.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozOTRmNDIyNC0wZDRkLTRmOWMtYjVjNi03ZjljNGE2ZjdiOTU=/snake-plant.jpg',
      alt: 'Snake Plant',
    },
    href: '#',
    rating: 4.9,
  },
  {
    id: '8',
    title: 'Spider Plant',
    subtitle: 'Indoor Plant',
    price: '$12.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphNzdlNDQwNS1mNDIxLTRiZTQtOGJkMy0wZTc2OWMyYmEzYjY=/spider-plant.jpg',
      alt: 'Spider Plant',
    },
    href: '#',
    rating: 4.2,
  },
  {
    id: '9',
    title: 'African Fig Tree',
    subtitle: 'Indoor Plant',
    price: '$49.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo2YTk0Y2E0Yy0wMjcyLTRkZTItOWQ2Mi0xMTY4OTczYzI1ZWM=/african-fig.jpg',
      alt: 'African Fig Tree',
    },
    href: '#',
    rating: 4.7,
  },
  {
    id: '10',
    title: 'Birds of Paradise',
    subtitle: 'Indoor Plant',
    price: '$29.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo2MTE4YmY5MC0wOWJlLTRlZDUtYjYyOS0wNzgwOTdiOWNjYTk=/birds-of-paradise.jpg',
      alt: 'Birds of Paradise',
    },
    href: '#',
    rating: 4.5,
  },
  {
    id: '11',
    title: 'ZZ Plant',
    subtitle: 'Indoor Plant',
    price: '$22.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToxNTFhZTMwNC0zYWZhLTRiZDgtOWRlYy01ODU1OTZlNjQyZDM=/zz-plant.jpg',
      alt: 'ZZ Plant',
    },
    href: '#',
    rating: 4.6,
  },
  {
    id: '12',
    title: 'Dracaena',
    subtitle: 'Indoor Plant',
    price: '$18.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozOWNmZThkOC00Y2M0LTQ2ZTAtODUwMy1lZmVhMzhhMWRmN2Y=/dracaena.jpg',
      alt: 'Dracanea',
    },
    href: '#',
    rating: 4.3,
  },
];
