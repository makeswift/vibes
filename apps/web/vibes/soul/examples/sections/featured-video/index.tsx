import { FeaturedVideo } from '@/vibes/soul/sections/featured-video';

export default function Preview() {
  return (
    <div className="flex flex-col gap-3">
      <FeaturedVideo
        cta={{ href: '#', label: 'Shop Now' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        mediaAlign="full"
        title="Pro-Team"
        video="https://storage.googleapis.com/s.mkswft.com/RmlsZTo3YWVmYWNlYy1iMjllLTRlMmItOTQ1Ny00MjUyYjlkYWVlOGU=/riding-bike-on-road.mp4"
      />
      <FeaturedVideo
        cta={{ href: '#', label: 'Shop Now' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        mediaAlign="right"
        title="Pro-Team"
        video="https://storage.googleapis.com/s.mkswft.com/RmlsZTo3YWVmYWNlYy1iMjllLTRlMmItOTQ1Ny00MjUyYjlkYWVlOGU=/riding-bike-on-road.mp4"
      />
      <FeaturedVideo
        cta={{ href: '#', label: 'Shop Now' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        mediaAlign="left"
        title="Pro-Team"
        video="https://storage.googleapis.com/s.mkswft.com/RmlsZTo3YWVmYWNlYy1iMjllLTRlMmItOTQ1Ny00MjUyYjlkYWVlOGU=/riding-bike-on-road.mp4"
      />
    </div>
  );
}
