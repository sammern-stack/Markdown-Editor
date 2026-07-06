import styles from "./MarkdownPreview.module.scss";
import { useOpenMarkdownStore } from "../../stores/openMarkdownStore";

export const MarkdownPreview = () => {
  const markdownContent = useOpenMarkdownStore((s) => s.markdownContent);

  return (
    <section className={styles.markdownPreview}>
      <div className={styles.markdownPreview__title}>PREVIEW</div>

      <div className={styles.markdownPreview__preview}>
        {markdownContent.length !== 0 && (
          <div className={styles.markdownPreview__content}>
            {markdownContent.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
