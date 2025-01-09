import { Maintenance } from '@/vibes/soul/sections/maintenance';

export default function Preview() {
  return (
    <main className="flex h-screen flex-row items-center">
      <Maintenance
        className="flex-1"
        contactEmail="info@soul.com"
        contactPhone="+(1) 408 123 4567"
        logo="SOUL"
      />
    </main>
  );
}
