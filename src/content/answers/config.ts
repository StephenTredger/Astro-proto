import { defineCollection, z } from 'astro:content';

const answersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    slug: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    relatedAnswers: z.array(z.string()).optional(),
  }),
});

export const collections = {
  answers: answersCollection,
};
