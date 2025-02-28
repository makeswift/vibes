import { Sliders } from 'lucide-react';

import { Button } from '@/vibes/soul/primitives/button';
import * as SidePanel from '@/vibes/soul/primitives/side-panel';

export default function Preview() {
  return (
    <div className="bg-background p-8 @container">
      <div className="mx-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
        <SidePanel.Root>
          <SidePanel.Trigger asChild>
            <Button size="medium" variant="secondary">
              Filters
              <span className="hidden @xl:block">
                <Sliders size={20} />
              </span>
            </Button>
          </SidePanel.Trigger>
          <SidePanel.Content title="Filters">
            <p className="text-lg text-contrast-500">Put your content here!</p>
          </SidePanel.Content>
        </SidePanel.Root>
      </div>
    </div>
  );
}
