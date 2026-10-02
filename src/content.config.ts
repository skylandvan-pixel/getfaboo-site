import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// "work" entries live in src/content/work/*.md
// Each file's `id` is derived from its filename, e.g. faboo.md -> "faboo",
// which becomes the URL at /work/faboo.
//
// ADDING A PROJECT = adding one .md file here. No layout code changes needed.
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['AI VIDEO', 'SOCIAL MEDIA', 'AI PRODUCTS']),
    year: z.number().int(),
    // Local path (e.g. "/covers/faboo.svg") or remote URL
    // (e.g. "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg").
    cover: z.string(),
    // Optional — when present, the detail page embeds the video.
    youtubeUrl: z.url().optional(),
    description: z.string().max(400),
    images: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { work };
