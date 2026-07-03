import type { Document } from "mongoose";

export type MarkdownSchema = {
  name: string;
  content: string[];
} & Document;
