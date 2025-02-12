import { z } from 'zod';

export const cartLineItemActionFormDataSchema = z.discriminatedUnion('intent', [
  z.object({
    intent: z.literal('increment'),
    id: z.string(),
  }),
  z.object({
    intent: z.literal('decrement'),
    id: z.string(),
  }),
  z.object({
    intent: z.literal('delete'),
    id: z.string(),
  }),
]);

export const couponCodeActionFormDataSchema = z.discriminatedUnion('intent', [
  z.object({
    couponCode: z.string(),
    intent: z.literal('apply'),
  }),
  z.object({
    couponCode: z.string(),
    intent: z.literal('delete'),
  }),
]);
