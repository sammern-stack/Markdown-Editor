import axiosInstance from "@/shared/lib/axiosInstance";
import { axiosCall } from "@/shared/utils/axiosHelpers";
import type { RequestFn } from "@/types/api.types";
import type { MarkdownSchema, MarkdownFile } from "@/types/markdown.types";

const BASE_URL = "/api/markdown";

export const getMarkdownFiles = async (): RequestFn<MarkdownSchema[]> => {
  return axiosCall(() => axiosInstance.get(BASE_URL));
};

export const getMarkdownFile = async (
  markdownId: string,
): RequestFn<MarkdownSchema> => {
  return axiosCall(() => axiosInstance.get(`${BASE_URL}/${markdownId}`));
};

export const createMarkdownFile = async (
  file: MarkdownFile,
): RequestFn<MarkdownSchema> => {
  return axiosCall(() => axiosInstance.post(BASE_URL, file));
};

export const updateMarkdownFile = async (
  markdownId: string,
  file: MarkdownFile,
): RequestFn<MarkdownSchema> => {
  return axiosCall(() => axiosInstance.put(`${BASE_URL}/${markdownId}`, file));
};

export const deleteMarkdownFile = async (
  markdownId: string,
): RequestFn<void> => {
  return axiosCall(() => axiosInstance.delete(`${BASE_URL}/${markdownId}`));
};
