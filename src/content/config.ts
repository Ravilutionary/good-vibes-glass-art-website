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

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional(),
    tags: z.array(z.string()),
    description: z.string(),
    image: z.string().optional(),
    relatedPosts: z.array(reference('blog')).optional(),
  }),
});

export const collections = {
  'events': eventsCollection,
  'brands': brandsCollection,
  'blog': blogCollection,
};
