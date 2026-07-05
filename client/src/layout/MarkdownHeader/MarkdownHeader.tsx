import styles from "./MarkdownHeader.module.scss";
import { useUiVisibilityStore } from "@/shared/stores";
import { CiSettings } from "react-icons/ci";
import { Icon } from "@/shared/components";
import {
  OpenMarkdownTitle,
  DeleteOpenMarkdownBtn,
  SaveOpenMarkdownBtn,
} from "@/features/markdown";

export const MarkdownHeader = () => {
  const toggle = useUiVisibilityStore((s) => s.toggle);

  return (
    <header className={styles.markdownHeader}>
      <button
        className={styles.markdownHeader__markdownListToggle}
        onClick={() => toggle("markdownSidebar")}
      >
        <Icon icon="icon-menu" />
      </button>
      <div className={styles.markdownHeader__content}>
        <div className={styles.markdownHeader__leftContent}>
          <Icon icon="logo" />
          <hr />
          <OpenMarkdownTitle />
        </div>
        <div className={styles.markdownHeader__rightContent}>
          <DeleteOpenMarkdownBtn />
          <SaveOpenMarkdownBtn />
        </div>
      </div>
      <button
        className={styles.markdownHeader__navigationToggle}
        onClick={() => toggle("navigationSidebar")}
      >
        <CiSettings />
      </button>
    </header>
  );
};
