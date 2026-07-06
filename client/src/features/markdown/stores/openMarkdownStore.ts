import { create } from "zustand";

interface OpenMarkdownStore {
  markdownContent: string[];
  setMarkdownContent: (content: string[]) => void;
  clearMarkdownContent: () => void;
}

export const useOpenMarkdownStore = create<OpenMarkdownStore>((set) => ({
  markdownContent: [],
  setMarkdownContent: (content) => set({ markdownContent: content }),
  clearMarkdownContent: () => set({ markdownContent: [] }),
}));
