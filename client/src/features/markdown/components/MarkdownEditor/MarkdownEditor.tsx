import styles from "./MarkdownEditor.module.scss";
import { EMPTY_MARKDOWN_PLACEHOLDER } from "../../constants";
import { useOpenMarkdownStore } from "../../stores/openMarkdownStore";
import { normalizeNewlines } from "@/shared/utils/formatters";
import type { TextareaChangeEvent } from "@/types/react.types";

export const MarkdownEditor = () => {
  const markdownContent = useOpenMarkdownStore((s) => s.markdownContent);
  const setMarkdownContent = useOpenMarkdownStore((s) => s.setMarkdownContent);

  const handleMarkdownChange = (e: TextareaChangeEvent) => {
    const normalizedContent = normalizeNewlines(e.target.value);
    setMarkdownContent(normalizedContent.split("\n"));
  };

  return (
    <section className={styles.markdownEditor}>
      <div className={styles.markdownEditor__title}>MARKDOWN</div>

      <textarea
        className={styles.markdownEditor__textarea}
        placeholder={EMPTY_MARKDOWN_PLACEHOLDER}
        value={markdownContent.join("\n")}
        onChange={handleMarkdownChange}
      ></textarea>
    </section>
  );
};
