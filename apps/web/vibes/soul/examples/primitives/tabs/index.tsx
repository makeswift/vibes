import { ButtonLink } from '@/vibes/soul/primitives/button-link';
import { Tabs } from '@/vibes/soul/primitives/tabs';

export default function Preview() {
  return (
    <div className="bg-background mx-auto max-w-3xl px-6 py-8">
      <Tabs
        defaultValue="description"
        tabs={[
          { value: 'description', label: 'Description', content: <TabDescriptionContent /> },
          { value: 'shipping', label: 'Shipping & Returns', content: <TabTrackingContent /> },
          { value: 'specs', label: 'Specs', content: <TabSpecsContent /> },
        ]}
      />
    </div>
  );
}

function TabDescriptionContent() {
  return (
    <div className="prose prose-sm max-w-none py-4">
      <p>
        Crafted with premium materials and thoughtful design, this product combines exceptional
        quality with everyday functionality. Features include durable construction, versatile use
        across multiple settings, and eco-friendly manufacturing processes that reduce environmental
        impact. Perfect for both beginners and enthusiasts alike, it offers the ideal balance of
        performance and style.
      </p>
    </div>
  );
}

function TabTrackingContent() {
  return (
    <div className="prose prose-sm max-w-none py-4">
      <p>
        Orders ship within 1-2 business days with delivery typically arriving in 3-7 days (expedited
        options available). All purchases include tracking information sent via email. Returns are
        accepted within 30 days of delivery for unused items in original packaging with tags
        attached. Simply contact customer service or initiate a return through your account for a
        full refund processed within 5-7 business days of receipt.
      </p>
      <ButtonLink className="not-prose" href="#" size="x-small">
        Start a return
      </ButtonLink>
    </div>
  );
}

function TabSpecsContent() {
  return (
    <div className="prose prose-sm max-w-none py-4">
      <dl className="not-prose text-foreground grid grid-cols-[1fr_2fr] gap-x-4 gap-y-2 text-sm [&>dd]:font-normal [&>dt]:font-semibold">
        <dt>Dimensions</dt>
        <dd>12&quot; × 8&quot; × 4&quot; (30cm × 20cm × 10cm)</dd>

        <dt>Weight</dt>
        <dd>1.2 lbs (550g)</dd>

        <dt>Materials</dt>
        <dd>Recycled polyester, organic cotton, aluminum hardware</dd>

        <dt>Country of Origin</dt>
        <dd>Made in Portugal</dd>

        <dt>Care</dt>
        <dd>Spot clean or hand wash with mild detergent</dd>

        <dt>Capacity</dt>
        <dd>15L / Holds up to 15 lbs</dd>
      </dl>
    </div>
  );
}
