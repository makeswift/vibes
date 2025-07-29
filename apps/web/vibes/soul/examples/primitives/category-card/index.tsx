import { CategoryCard } from '@/vibes/soul/primitives/category-card';

export default function Preview() {
  return (
    <div className="@container">
      <div className="bg-background @container p-8">
        <div className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 @lg:grid-cols-2">
          <CategoryCard
            href="#"
            image={{
              src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/pink-caladium.jpeg',
              alt: 'Low Maintenance',
            }}
            title="Low Maintenance"
          />
          <CategoryCard href="#" title="Low Maintenance" />
          <CategoryCard
            href="#"
            image={{
              src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/pink-caladium.jpeg',
              alt: 'Low Maintenance',
            }}
            textColorScheme="dark"
            textPosition="inside"
            textSize="small"
            title="Low Maintenance"
          />
          <CategoryCard
            href="#"
            image={{
              src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/pink-caladium.jpeg',
              alt: 'Low Maintenance',
            }}
            textColorScheme="dark"
            textPosition="inside"
            textSize="large"
            title="Low Maintenance"
          />
        </div>
      </div>
      <div className="bg-foreground p-8">
        <div className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 @lg:grid-cols-2">
          <CategoryCard
            aspectRatio="1:1"
            href="#"
            iconColorScheme="dark"
            image={{
              src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/pink-caladium.jpeg',
              alt: 'Low Maintenance',
            }}
            textColorScheme="dark"
            title="Low Maintenance"
          />
          <CategoryCard
            aspectRatio="1:1"
            href="#"
            iconColorScheme="dark"
            textColorScheme="dark"
            title="Partial shade"
          />
        </div>
      </div>
    </div>
  );
}
