import { Reveal } from '@/vibes/soul/primitives/reveal';

export default function Preview() {
  return (
    <div className="bg-background px-6 py-8">
      <div className="mx-auto grid max-w-lg grid-cols-1 gap-12 sm:max-w-3xl sm:grid-cols-2 sm:gap-20">
        <Reveal maxHeight="8rem">
          <div className="text-contrast-500 space-y-4 text-sm font-normal">
            <h3 className="font-heading text-foreground text-lg font-medium">Return Policy</h3>
            <p>
              To begin your return, simply log into your account on our website or contact our
              dedicated customer service team. Once your return is authorized, we&apos;ll provide
              you with a prepaid shipping label for domestic returns.
            </p>
            <p>
              All returned items undergo a quality inspection upon receipt at our facility. After
              passing inspection, we&apos;ll process your refund to the original payment method
              within 5-7 business days, though your bank may require additional time to reflect the
              credit in your account.
            </p>
            <p>
              Please note that certain items, including personalized products and final sale
              merchandise, are not eligible for return due to health and safety regulations.
            </p>
          </div>
        </Reveal>
        <Reveal maxHeight="8rem" variant="button">
          <div className="text-contrast-500 space-y-4 text-sm font-normal">
            <h3 className="font-heading text-foreground text-lg font-medium">Return Policy</h3>
            <p>
              To begin your return, simply log into your account on our website or contact our
              dedicated customer service team. Once your return is authorized, we&apos;ll provide
              you with a prepaid shipping label for domestic returns.
            </p>
            <p>
              All returned items undergo a quality inspection upon receipt at our facility. After
              passing inspection, we&apos;ll process your refund to the original payment method
              within 5-7 business days, though your bank may require additional time to reflect the
              credit in your account.
            </p>
            <p>
              Please note that certain items, including personalized products and final sale
              merchandise, are not eligible for return due to health and safety regulations.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
