import type { Request, Response } from "express";
import * as markdownService from "@/services/markdown.service.js";
import { asyncHandler } from "@/utils/asyncHandler.js";
import { sendSuccess } from "@/utils/apiResponse.js";
import type { MarkdownSchema } from "@/types/markdown.types.js";
import type {
  CreateRequest,
  DeleteRequest,
  GetOneRequest,
  UpdateRequest,
} from "@/types/request.types.js";

export const getMarkdowns = asyncHandler(
  async (req: Request, res: Response) => {
    const markdowns = await markdownService.getAllMarkdowns();
    sendSuccess(res, "Markdowns received successfully", markdowns, {
      length: markdowns.length,
    });
  },
);

export const getMarkdown = asyncHandler(
  async (req: GetOneRequest, res: Response) => {
    const markdown = await markdownService.getMarkdownById(req.params.id!);
    sendSuccess(res, "Markdown received successfully", markdown);
  },
);

export const createMarkdown = asyncHandler(
  async (req: CreateRequest<MarkdownSchema>, res: Response) => {
    const markdown = await markdownService.createNewMarkdown(req.body);
    sendSuccess(res, "Markdown created successfully", markdown);
  },
);

export const updateMarkdown = asyncHandler(
  async (req: UpdateRequest<MarkdownSchema>, res: Response) => {
    const markdown = await markdownService.updateMarkdown(
      req.params.id!,
      req.body,
    );
    sendSuccess(res, "Markdown created successfully", markdown);
  },
);

export const deleteMarkdown = asyncHandler(
  async (req: DeleteRequest, res: Response) => {
    await markdownService.deleteMarkdown(req.params.id!);
    sendSuccess(res, "Markdown deleted successfully", {});
  },
);
