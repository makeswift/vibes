import { Countdown } from '@/vibes/soul/sections/countdown';

export default function Preview() {
  return (
    <div className="flex flex-col gap-3">
      <Countdown
        targetDate={new Date('2024-10-24T00:00:00')}
        title="Next.js Conf is coming!"
        variant={{
          type: 'default',
          images: [
            'https://rstr.in/monogram/vibes/o_0gBpyrOVe',
            'https://rstr.in/monogram/vibes/VSkA1mBG78U',
          ],
        }}
      />
      <Countdown
        targetDate={new Date('2024-10-24T00:00:00')}
        title="Next.js Conf is coming!"
        variant={{ type: 'full', backgroundImage: 'https://rstr.in/monogram/vibes/VSkA1mBG78U' }}
      />
      <Countdown
        targetDate={new Date('2024-10-24T00:00:00')}
        title="Next.js Conf is coming!"
        variant={{ type: 'split', image: 'https://rstr.in/monogram/vibes/VSkA1mBG78U' }}
      />
      <Countdown
        targetDate={new Date('2024-10-24T00:00:00')}
        title="Next.js Conf is coming!"
        variant={{ type: 'banner' }}
      />
    </div>
  );
}
