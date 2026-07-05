import styles from "./SaveOpenMarkdownBtn.module.scss";
import { Icon } from "@/shared/components";

export const SaveOpenMarkdownBtn = () => {
  const handleSave = () => {
    // Handle saving the current open document changes from here
  };

  return (
    <button className={styles.saveOpenMarkdownBtn} onClick={handleSave}>
      <Icon icon="icon-save" />
      <span>Save Changes</span>
    </button>
  );
};
