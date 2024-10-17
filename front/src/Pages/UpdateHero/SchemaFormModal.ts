import { z } from "zod";

export const SchemaFormModalUpdate = z.object({
  name: z.string().min(2, "Nome precisa conter no minimo 2 letras"),
  skills: z.string().min(2, "Skills precisa conter no minimo 2 letras"),
  origin: z.string().min(2, "Origin precisa conter no minimo 2 letras"),
});

export type IHeroNew = z.infer<typeof SchemaFormModalUpdate>;
