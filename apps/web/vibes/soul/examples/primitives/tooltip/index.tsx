import { Tooltip } from '@/vibes/soul/primitives/tooltip';

export default function Preview() {
  return (
    <div className="bg-background p-8 @container">
      <div className="mx-auto flex max-w-screen-md flex-col items-center gap-8">
        <Tooltip trigger={<div>Hover me!</div>} delayDuration={0}>
          <p className="text-sm text-contrast-500">Put your tooltip content here!</p>
        </Tooltip>
      </div>
    </div>
  );
}
