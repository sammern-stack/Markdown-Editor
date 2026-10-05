import { create } from "zustand";

type VisibilityFlags = {
  markdownSidebar: boolean;
  navigationSidebar: boolean;
  dialog: boolean;
};

interface UiVisibilityStore {
  flags: VisibilityFlags;
  toggle: (key: keyof VisibilityFlags) => void;
  set: (key: keyof VisibilityFlags, value: boolean) => void;
}

export const useUiVisibilityStore = create<UiVisibilityStore>((set) => ({
  flags: {
    markdownSidebar: false,
    navigationSidebar: false,
    dialog: false,
  },

  toggle: (state) => {
    set((s) => ({ flags: { ...s.flags, [state]: !s.flags[state] } }));
  },

  set: (state, value) => {
    set((s) => ({ flags: { ...s.flags, [state]: value } }));
  },
}));
