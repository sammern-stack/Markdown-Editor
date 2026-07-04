import type { Document, QueryFilter } from "mongoose";

export type MarkdownSchema = {
  name: string;
  content: string[];
} & Document;

export type MarkdownQueryFilter = QueryFilter<MarkdownSchema>;
export type MarkdownCreateBody = Partial<MarkdownSchema>;
