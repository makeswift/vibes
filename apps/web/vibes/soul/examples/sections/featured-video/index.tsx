import { FeaturedVideo } from '@/vibes/soul/sections/featured-video';

export default function Preview() {
  return (
    <div className="flex flex-col gap-3">
      <FeaturedVideo
        title="Pro-Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
        cta={{ href: '#', label: 'Shop Now' }}
        mediaAlign="full"
      />
      <FeaturedVideo
        title="Pro-Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
        cta={{ href: '#', label: 'Shop Now' }}
        mediaAlign="right"
      />
      <FeaturedVideo
        title="Pro-Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
        cta={{ href: '#', label: 'Shop Now' }}
        mediaAlign="left"
      />
    </div>
  );
}
