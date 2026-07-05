import styles from "./MarkdownPreview.module.scss";

export const MarkdownPreview = () => {
  return (
    <section className={styles.markdownPreview}>
      {/* Preview Title */}

      <div className={styles.markdownPreview__preview}>
        {/* Here the user will see the markdown preview live */}
      </div>
    </section>
  );
};
