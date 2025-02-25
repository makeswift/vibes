import { Countdown } from '@/vibes/soul/sections/countdown';

export default function Preview() {
  const twoWeeksFromNow = new Date();
  twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);

  return (
    <div className="flex flex-col gap-3">
      <Countdown
        targetDate={twoWeeksFromNow}
        title="Our event is coming!"
        variant={{
          type: 'default',
          images: [
            'https://rstr.in/monogram/vibes/o_0gBpyrOVe',
            'https://rstr.in/monogram/vibes/VSkA1mBG78U',
          ],
        }}
      />
      <Countdown
        targetDate={twoWeeksFromNow}
        title="Our event is coming!"
        variant={{ type: 'full', backgroundImage: 'https://rstr.in/monogram/vibes/VSkA1mBG78U' }}
      />
      <Countdown
        targetDate={twoWeeksFromNow}
        title="Our event is coming!"
        variant={{ type: 'split', image: 'https://rstr.in/monogram/vibes/VSkA1mBG78U' }}
      />
      <Countdown
        targetDate={twoWeeksFromNow}
        title="Our event is coming!"
        variant={{ type: 'banner' }}
      />
    </div>
  );
}
