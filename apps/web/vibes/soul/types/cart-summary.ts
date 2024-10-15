export default interface CartSummary {
  title?: string
  caption?: string
  subtotalLabel?: string
  subtotal: string | Promise<string>
  shippingLabel?: string
  shipping?: string
  taxLabel?: string
  tax?: string | Promise<string>
  grandTotalLabel?: string
  grandTotal?: string | Promise<string>
  ctaLabel?: string
}
