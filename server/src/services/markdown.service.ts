import Markdown from "@/models/markdown.model.js";
import type {
  MarkdownSchema,
  MarkdownQueryFilter,
  MarkdownUpdateBody,
} from "@/types/markdown.types.js";
import {
  ConflictError,
  NotFoundError,
  ValidationError,
} from "@/utils/customErrors.js";
import { isMongooseId } from "@/utils/validators.js";
import { queryOptions } from "@/config/db.js";

const searchMarkdown = async (idOrMeta: string | MarkdownQueryFilter) => {
  const isId = typeof idOrMeta === "string";
  if (isId && !isMongooseId(idOrMeta as string))
    throw new ValidationError("Invalid ID");

  const markdown = isId
    ? await Markdown.findById(idOrMeta as string)
    : await Markdown.findOne(idOrMeta as MarkdownQueryFilter);

  if (!markdown) return null;

  return markdown;
};

export const getAllMarkdowns = async () => {
  return await Markdown.find({});
};

export const getMarkdownById = async (id: string) => {
  const markdown = await searchMarkdown(id);
  if (!markdown) throw new NotFoundError("Markdown not found");
  return markdown;
};

export const createNewMarkdown = async (markdown: MarkdownSchema) => {
  const exists = await searchMarkdown({ name: markdown.name });
  if (exists) throw new ConflictError("name");
  return await Markdown.create(markdown);
};

export const updateMarkdown = async (
  id: string,
  updates: MarkdownUpdateBody,
) => {
  const markdown = await searchMarkdown(id);
  if (!markdown) throw new NotFoundError("Markdown not found");
  return await Markdown.findByIdAndUpdate(markdown._id, updates, queryOptions);
};

export const deleteMarkdown = async (id: string) => {
  const markdown = await searchMarkdown(id);
  if (!markdown) throw new NotFoundError("Markdown not found");
  await Markdown.findByIdAndDelete(markdown._id);
};
