import { EMPTY_LINE_REGEX, NEW_LINE_REGEX } from "../lib/regex";

export const normalizeNewlines = (text: string): string => {
  return text.replace(NEW_LINE_REGEX, "\n").replace(EMPTY_LINE_REGEX, "");
};
