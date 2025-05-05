import { type Order, OrderList } from '@/vibes/soul/sections/order-list';

export default function Preview() {
  const orders = new Promise<Order[]>((resolve) => {
    setTimeout(() => {
      resolve(defaultOrders);
    }, 1000);
  });

  return (
    <div className="p-6">
      <OrderList orders={orders} />
    </div>
  );
}

const products = [
  {
    id: '1',
    title: 'Mini Bar Bag',
    subtitle: 'Blue/Black/Green',
    price: '$65',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1YzIwNTljMi04NzcwLTRiM2ItYmIzMy02ZTk0ODNkY2M5MDk=/mini-bar-bag.jpeg',
      alt: 'Mini Bar Bag',
    },
    href: '#',
    rating: 4.3,
  },
  {
    id: '2',
    title: 'Mini Bar Bag',
    subtitle: 'Blue/Black/Green',
    price: '$65',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphOTFmNjU3Ny0zMDMxLTQzNjYtOWUzNC02MjRkYWQ4OTkzOWI=/mini-bar-bag-2.jpeg',
      alt: 'Mini Bar Bag',
    },
    href: '#',
    rating: 4.5,
  },
  {
    id: '3',
    title: 'Stem Caddy',
    subtitle: 'Blue/Black/Green',
    price: '$60',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo5NTIxMmU4MC0xY2EwLTQxZjktOTBiYS0yOWFhYmU3ZTNkMzA=/stem-caddy.jpeg',
      alt: 'Stem Caddy',
    },
    href: '#',
    rating: 4.2,
  },
  {
    id: '4',
    title: 'Hip Slinger',
    subtitle: 'Blue/Black/Green',
    price: '$105',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0MDcxNDBlYy1jYmIzLTRiNjQtOTUxMS1mMTIyMGUyYWY5MjQ=/hip-slinger.jpeg',
      alt: 'Hip Slinger',
    },
    href: '#',
    rating: 4.6,
  },
  {
    id: '5',
    title: 'Everyday Tote',
    subtitle: 'Blue/Black/Green',
    price: '$185',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowODYwYTY2NC02NjdjLTRhODYtYTUxYy1jOWExNzI5YTdjMDk=/everyday-tote.jpeg',
      alt: 'Everyday Tote',
    },
    href: '#',
    rating: 4.8,
  },
  {
    id: '6',
    title: 'Mini Saddlebag',
    subtitle: 'Blue/Black/Green',
    price: '$45',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4YzEyMjUyOC0zMWU5LTQyYWYtOTFlYi04YjQzNmRiZGVmNDU=/mini-saddlebag.jpeg',
      alt: 'Mini Saddlebag',
    },
    href: '#',
    rating: 4.1,
  },
];

const defaultOrders: Order[] = [
  {
    id: '1',
    totalPrice: products
      .slice(0, 3)
      .reduce((acc, product) => acc + parseInt(product.price.slice(1), 10), 25)
      .toFixed(2),
    status: 'Delivered',
    href: '#',
    lineItems: products.slice(0, 3),
  },
  {
    id: '2',
    totalPrice: products
      .slice(3, 5)
      .reduce((acc, product) => acc + parseInt(product.price.slice(1), 10), 25)
      .toFixed(2),
    status: 'Delivered',
    href: '#',
    lineItems: products.slice(3, 5),
  },
  {
    id: '3',
    totalPrice: products
      .slice(4, 6)
      .reduce((acc, product) => acc + parseInt(product.price.slice(1), 10), 25)
      .toFixed(2),
    status: 'Delivered',
    href: '#',
    lineItems: products.slice(4, 6),
  },
];
