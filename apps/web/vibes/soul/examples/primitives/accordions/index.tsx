import { Accordion, Accordions } from '@/vibes/soul/primitives/accordions'

export default function Preview() {
  const accordions = [
    {
      title: 'What is your return policy?',
      content:
        'Our return policy allows you to return items within 30 days of purchase for a full refund. Items must be in their original condition and packaging.',
    },
    {
      title: 'How long does shipping take?',
      content:
        'Shipping typically takes 3-5 business days for domestic orders. International shipping may take longer depending on the destination.',
    },
    {
      title: 'Do you offer international shipping?',
      content:
        'Yes, we offer international shipping to select countries. Please check our shipping policy for more details on available locations.',
    },
    {
      title: 'How can I track my order?',
      content:
        'Once your order has shipped, you will receive an email with a tracking number. You can use this number to track your order on our website.',
    },
  ]

  return (
    <div className="m-auto flex h-screen w-1/2 max-w-screen-lg items-start justify-center p-10">
      <Accordions type="multiple" className="w-full">
        {accordions.map(({ title, content }, index) => (
          <Accordion key={index} title={title} value={index.toString()}>
            {content}
          </Accordion>
        ))}
      </Accordions>
    </div>
  )
}
