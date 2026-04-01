import { defineCollection, reference, z } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    venue: z.string(),
    seoAngle: z.string(),
    category: z.string(),
    time: z.string().optional(),
    relatedBrands: z.array(reference('brands')).optional(),
  }),
});

const brandsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    description: z.string().optional(),
    website: z.string().url().optional(),
  }),
});

export const collections = {
  'events': eventsCollection,
  'brands': brandsCollection,
};
