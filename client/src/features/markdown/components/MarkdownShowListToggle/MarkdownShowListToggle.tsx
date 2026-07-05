import styles from "./MarkdownShowListToggle.module.scss";
import { Icon } from "@/shared/components";

export const MarkdownShowListToggle = () => {
  const handleToggle = () => {
    // Toggle Action to open and close MarkdownSidebar
  };

  return (
    <button className={styles.markdownShowListToggle} onClick={handleToggle}>
      <Icon icon="icon-menu" />
    </button>
  );
};
