import { Maintenance } from '@/vibes/soul/sections/maintenance';

export default function Preview() {
  const logoPromise = new Promise<string | { src: string; alt: string }>((res) =>
    setTimeout(() => res(logo), 1000),
  );

  return (
    <Maintenance
      contactEmail="info@outershell.com"
      contactPhone="+(1) 408 123 4567"
      logo={logoPromise}
    />
  );
}

const logo = {
  src: '/soul/outer-shell-logo.png',
  alt: 'Outer Shell Logo',
};
