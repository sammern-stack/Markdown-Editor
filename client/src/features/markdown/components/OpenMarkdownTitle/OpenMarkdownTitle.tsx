import styles from "./OpenMarkdownTitle.module.scss";
import { Icon } from "@/shared/components";
import { useOpenMarkdownStore } from "../../stores/openMarkdownStore";

export const OpenMarkdownTitle = () => {
  const markdownTitle = useOpenMarkdownStore((s) => s.markdownTitle);
  const setMarkdownTitle = useOpenMarkdownStore((s) => s.setMarkdownTitle);

  return (
    <div className={styles.openMarkdownTitle}>
      <Icon icon="icon-document" />
      <div className={styles.openMarkdownTitle__content}>
        <p>Document Name</p>
        <div className={styles.openMarkdownTitle__input}>
          <input
            type="text"
            placeholder="Enter document name..."
            value={markdownTitle}
            onChange={(e) => setMarkdownTitle(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
