import styles from "./SaveOpenMarkdownBtn.module.scss";
import { Icon } from "@/shared/components";
import { useOpenMarkdownStore } from "../../stores/openMarkdownStore";
import { createMarkdownFile } from "../../services/markdownApi";

export const SaveOpenMarkdownBtn = () => {
  const content = useOpenMarkdownStore((s) => s.markdownContent);
  const name = useOpenMarkdownStore((s) => s.markdownTitle);
  const clearContent = useOpenMarkdownStore((s) => s.clearMarkdownContent);
  const clearTitle = useOpenMarkdownStore((s) => s.clearMarkdownTitle);

  const handleSave = () => {
    createMarkdownFile({ name, content });
    clearContent();
    clearTitle();
  };

  return (
    <button className={styles.saveOpenMarkdownBtn} onClick={handleSave}>
      <Icon icon="icon-save" />
      <span>Save Changes</span>
    </button>
  );
};
