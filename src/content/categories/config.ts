import { defineCollection, z } from 'astro:content';

const categoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  categories: categoriesCollection,
};
