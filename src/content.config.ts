import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experts' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    title: z.string(),
    phone: z.string().optional(),
    photo: z.string().optional(),
    specialisms: z.array(z.string()).default([]),
    yearsInIndustry: z.string().optional(), // free-form label ("20+", "12") — not always a round approximation
    order: z.number().default(0), // display order — glob loader otherwise returns entries alphabetically by filename
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
  }),
});

const answers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/answers' }),
  schema: z.object({
    question: z.string(),
    slug: z.string(),
    category: z.string(),          // references a categories entry by slug
    answeredBy: z.string(),        // references an experts entry by slug
    tags: z.array(z.string()).default([]),
    relatedAnswers: z.array(z.string()).default([]), // slugs of other answers entries
    sourceUrl: z.string().url().optional(), // original enclosureanswers.com URL, for migration reference
    publishedDate: z.date().optional(),
    shortTitle: z.string().optional(), // compact label for breadcrumbs, falls back to the full question
    shortAnswer: z.string().optional(), // one-paragraph summary shown in a callout above the full answer
    keyQuestions: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]), // optional "start with these questions" breakdown
    comparisonTable: z
      .object({
        columns: z.array(z.string()),
        rows: z.array(z.array(z.string())),
      })
      .optional(),
    diagramCaption: z.string().optional(), // caption for a placeholder diagram box, if this answer has one
  }),
});

export const collections = { answers, categories, experts };
