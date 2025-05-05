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
            'https://storage.googleapis.com/s.mkswft.com/RmlsZTo5MjIxNzc5Mi03ZThkLTQ2YWUtYTRmNC04MjE3NzE5ODQzNWU=/pro-biker.png',
            'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0M2M2ZWE2MS0xNDhkLTRlYjItOTlhNi1kZTc5YjJiNmI3NDU=/women-bikers.png',
          ],
        }}
      />
      <Countdown
        targetDate={twoWeeksFromNow}
        title="Our event is coming!"
        variant={{
          type: 'full',
          backgroundImage:
            'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0M2M2ZWE2MS0xNDhkLTRlYjItOTlhNi1kZTc5YjJiNmI3NDU=/women-bikers.png',
        }}
      />
      <Countdown
        targetDate={twoWeeksFromNow}
        title="Our event is coming!"
        variant={{
          type: 'split',
          image:
            'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0M2M2ZWE2MS0xNDhkLTRlYjItOTlhNi1kZTc5YjJiNmI3NDU=/women-bikers.png',
        }}
      />
      <Countdown
        targetDate={twoWeeksFromNow}
        title="Our event is coming!"
        variant={{ type: 'banner' }}
      />
    </div>
  );
}
