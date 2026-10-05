import styles from "./MarkdownSidebar.module.scss";
import { useUiVisibilityStore } from "@/shared/stores";

export const MarkdownSidebar = () => {
  const markdownFlag = useUiVisibilityStore((s) => s.flags.markdownSidebar);
  const activeClass = markdownFlag && styles["markdownSidebar--active"];

  return (
    <aside className={`${styles.markdownSidebar} ${activeClass}`}>
      <p className={styles.markdownSidebar__title}>My documents</p>

      {/* Create new document action button */}

      {/* A List of all the documents */}
    </aside>
  );
};
