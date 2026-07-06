import styles from "./MarkdownPreview.module.scss";

export const MarkdownPreview = () => {
  return (
    <section className={styles.markdownPreview}>
      <div className={styles.markdownPreview__title}>PREVIEW</div>

      <div className={styles.markdownPreview__preview}>
        {/* Here the user will see the markdown preview live */}
      </div>
    </section>
  );
};
