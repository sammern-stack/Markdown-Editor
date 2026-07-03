import { Schema, model } from "mongoose";
import type { MarkdownSchema } from "@/types/markdown.type.js";

const markdownSchema = new Schema<MarkdownSchema>(
  {
    name: {
      type: String,
      default: "Untitled",
    },

    content: {
      type: [String],
      required: [true, "Content shouldn't be empty"],
    },
  },
  { timestamps: true },
);

const Markdown = model("markdown", markdownSchema)
export default Markdown;
