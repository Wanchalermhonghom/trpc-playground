import { object, string, z } from "zod";

export const createHomeSchema = object({
  name: string().min(1).max(255),
  adress: string(),
  city: string(),
  state: string(),
  zip: string(),
  country: string(),
  categoryId: string().cuid(),
});
export const categories = [
  "apartment",
  "house",
  "condo",
  "townhouse",
  "loft",
  "other",
] as const;

export const categoriesSchema = z.enum(categories);
export type categoriesType = z.infer<typeof categoriesSchema>;

export type creatHomeType = z.infer<typeof createHomeSchema>;
