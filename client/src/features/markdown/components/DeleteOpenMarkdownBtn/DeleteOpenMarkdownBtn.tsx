import styles from "./DeleteOpenMarkdownBtn.module.scss";
import { Icon } from "@/shared/components";

export const DeleteOpenMarkdownBtn = () => {
  const handleDelete = () => {
    // Call delete dialog from here
  };

  return (
    <button className={styles.deleteOpenMarkdownBtn} onClick={handleDelete}>
      <Icon icon="icon-delete" />
    </button>
  );
};
