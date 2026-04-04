import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string(),
    slug: z.string(),
    category: z.string(),
    role: z.string(),
    year: z.string(),
    tech: z.array(z.string()),
    status: z.string(),
    thumbnail: image(),
    order: z.number(),
    heroTagline: z.string(),
    problem: z.string(),
    solution: z.string(),
    technicalDecisions: z.string(),
    whereItStands: z.string(),
    images: z.array(
      z.object({
        src: image(),
        alt: z.string(),
        caption: z.string().optional(),
      })
    ).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
