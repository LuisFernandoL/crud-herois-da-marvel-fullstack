import { z } from "zod";

export const HeroSchema = z.object({
  id: z.string(),
  name: z.string(),
  skils: z.string(),
  origin: z.string(),
});

export type HeroData = z.infer<typeof HeroSchema>;
