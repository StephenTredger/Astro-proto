import { defineCollection, z } from 'astro:content';

const experts = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    title: z.string(),
    phone: z.string().optional(),
    photo: z.string().optional(),
  }),
});

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
  }),
});

const answers = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    slug: z.string(),
    category: z.string(),          // references a categories entry by slug
    answeredBy: z.string(),        // references an experts entry by slug
    tags: z.array(z.string()).default([]),
    relatedAnswers: z.array(z.string()).default([]), // slugs of other answers entries
    sourceUrl: z.string().url().optional(), // original enclosureanswers.com URL, for migration reference
    publishedDate: z.date().optional(),
  }),
});

export const collections = { answers, categories, experts };
