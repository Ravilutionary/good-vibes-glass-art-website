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

const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    category: z.string(),
    badge: z.string().optional(),
    badgeColor: z.string().default('bg-teal-glow text-deep-black'),
    icon: z.string().default('fa-solid fa-bolt'),
    iconColor: z.string().default('text-teal-glow'),
    description: z.string(),
    price: z.string(),
    featured: z.boolean().default(true),
    order: z.number().default(0),
  }),
});

const reviewsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    author: z.string(),
    rating: z.number().default(5),
    quote: z.string(),
    source: z.string().default('Google'),
    order: z.number().default(0),
  }),
});

export const collections = {
  'events': eventsCollection,
  'brands': brandsCollection,
  'blog': blogCollection,
  'products': productsCollection,
  'reviews': reviewsCollection,
};
