import { EMPTY_MARKDOWN_PLACEHOLDER } from "../../constants";
import styles from "./MarkdownEditor.module.scss";

export const MarkdownEditor = () => {
  return (
    <section className={styles.markdownEditor}>
      <div className={styles.markdownEditor__title}>MARKDOWN</div>

      <textarea
        className={styles.markdownEditor__textarea}
        placeholder={EMPTY_MARKDOWN_PLACEHOLDER}
      ></textarea>
    </section>
  );
};
