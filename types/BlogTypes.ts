export interface BlogTypes {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  createdAt: Date;
  category: string;
}

export type BlogFormTypes = Omit<BlogTypes, "id" | "createdAt">;

export type CategoryEnum = ["Technology", "Design", "Culture", "Business"];
