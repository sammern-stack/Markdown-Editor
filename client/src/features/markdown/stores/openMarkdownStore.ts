import { create } from "zustand";

interface OpenMarkdownStore {
  markdownTitle: string;
  setMarkdownTitle: (title: string) => void;
  clearMarkdownTitle: () => void;

  markdownContent: string[];
  setMarkdownContent: (content: string[]) => void;
  clearMarkdownContent: () => void;
}

export const useOpenMarkdownStore = create<OpenMarkdownStore>((set) => ({
  markdownTitle: "",
  setMarkdownTitle: (title) => set({ markdownTitle: title }),
  clearMarkdownTitle: () => set({ markdownTitle: "" }),

  markdownContent: [],
  setMarkdownContent: (content) => set({ markdownContent: content }),
  clearMarkdownContent: () => set({ markdownContent: [] }),
}));
