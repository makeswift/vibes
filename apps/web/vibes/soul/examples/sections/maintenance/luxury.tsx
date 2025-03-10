import { Maintenance } from '@/vibes/soul/sections/maintenance';

export default function Preview() {
  const logoPromise = new Promise<string | { src: string; alt: string }>((res) =>
    setTimeout(() => res(logo), 1000),
  );

  return (
    <Maintenance
      contactEmail="info@fredasalvador.com"
      contactPhone="+(1) 408 123 4567"
      logo={logoPromise}
    />
  );
}

export const logo = {
  src: '/soul/freda-logo.png',
  alt: 'Freda Salvador Logo',
};
