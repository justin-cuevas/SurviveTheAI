import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    filename: z.string(),
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    description: z.string(),
    excerpt: z.string(),
    image: z.string(),
    tags: z.array(z.string())
  }),
  layout: '../../layouts/BaseLayout.astro'
});

export const collections = {
  posts,
};