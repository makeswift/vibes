import { Error } from '@/vibes/soul/sections/error';
import { action } from './actions';

export default function Preview() {
  return <Error ctaLabel="Go back" ctaAction={action} />;
}
