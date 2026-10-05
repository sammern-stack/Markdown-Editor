export type MarkdownSchema = {
  _id: string;
  name: string;
  content: string[];
  createdAt: string;
  updatedAt: string;
};

export type MarkdownFile = {
  name: string;
  content: string[];
};
