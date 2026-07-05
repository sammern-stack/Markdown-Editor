import styles from "./MarkdownEditor.module.scss";

export const MarkdownEditor = () => {
  return (
    <section className={styles.markdownEditor}>
      {/* Markdown Title */}

      <textarea className={styles.markdownEditor__textarea}>
        {/* Here the user will be editing there markdown files */}
      </textarea>
    </section>
  );
};
