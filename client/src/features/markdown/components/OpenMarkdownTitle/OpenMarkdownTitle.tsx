import styles from "./OpenMarkdownTitle.module.scss";
import { Icon } from "@/shared/components";

export const OpenMarkdownTitle = () => {
  return (
    <div className={styles.openMarkdownTitle}>
      <Icon icon="icon-document" />
      <div className={styles.openMarkdownTitle__content}>
        <p>Document Name</p>
        {/* // TODO: updated when you create useMarkdownStore */}
        <input type="text" value={"welcome.md"} />
      </div>
    </div>
  );
};
