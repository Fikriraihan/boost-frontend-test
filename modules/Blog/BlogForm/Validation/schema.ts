import { z } from "zod";

const CategoryEnum = z.enum(["Technology", "Design", "Culture", "Business"]);

export const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters." }),
  author: z
    .string()
    .min(1, { message: "Author must be at least 1 character." }),
  summary: z
    .string()
    .min(10, { message: "Summary must be at least 10 characters." }),
  content: z
    .string()
    .min(20, { message: "Content must be at least 20 characters." }),
  category: CategoryEnum,
  createdAt: z.date().optional(),
});

export type CategoryEnum = z.infer<typeof CategoryEnum>;
