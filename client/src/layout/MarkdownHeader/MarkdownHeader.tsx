import styles from "./MarkdownHeader.module.scss";
import { Icon } from "@/shared/components";
import {
  OpenMarkdownTitle,
  DeleteOpenMarkdownBtn,
  SaveOpenMarkdownBtn,
} from "@/features/markdown";

export const MarkdownHeader = () => {
  return (
    <header className={styles.markdownHeader}>
      <button
        className={styles.markdownHeader__markdownListToggle}
        onClick={() => {}}
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
        onClick={() => {}}
      >
        <Icon icon="icon-menu" />
      </button>
    </header>
  );
};
