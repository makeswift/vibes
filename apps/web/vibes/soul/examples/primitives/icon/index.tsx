import { Icon } from '@/vibes/soul/primitives/icon';

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center gap-x-8">
      <Icon className="text-contrast-500" name="user" size={32} />
      <Icon className="text-contrast-500" name="alarm-clock" size={32} />
      <Icon className="text-contrast-500" name="settings" size={32} />
    </div>
  );
}
