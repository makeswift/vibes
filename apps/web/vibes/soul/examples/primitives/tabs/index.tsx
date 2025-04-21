import { Tabs } from '@/vibes/soul/primitives/tabs';

export default function Preview() {
  return (
    <div className="mx-auto max-w-3xl bg-background px-6 py-8">
      <Tabs
        defaultValue="tracking"
        tabs={[
          { value: 'tracking', label: 'Tracking', content: <TabTrackingContent /> },
          { value: 'details', label: 'Details', content: <TabDetailsContent /> },
        ]}
      />
    </div>
  );
}

function TabTrackingContent() {
  return (
    <div className="py-4">
      <p className="text-base font-normal text-foreground">View tracking here.</p>
    </div>
  );
}

function TabDetailsContent() {
  return (
    <div className="py-4">
      <p className="text-base font-normal text-foreground">View details here.</p>
    </div>
  );
}
