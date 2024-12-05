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
        video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
      />
      <FeaturedVideo
        cta={{ href: '#', label: 'Shop Now' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        mediaAlign="right"
        title="Pro-Team"
        video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
      />
      <FeaturedVideo
        cta={{ href: '#', label: 'Shop Now' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        mediaAlign="left"
        title="Pro-Team"
        video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
      />
    </div>
  );
}
