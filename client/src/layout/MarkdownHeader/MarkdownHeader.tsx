import styles from "./MarkdownHeader.module.scss";
import { Icon } from "@/shared/components";
import {
  MarkdownShowListToggle,
  OpenMarkdownTitle,
  DeleteOpenMarkdownBtn,
  SaveOpenMarkdownBtn,
} from "@/features/markdown";

export const MarkdownHeader = () => {
  return (
    <header className={styles.markdownHeader}>
      <MarkdownShowListToggle />
      <div className={styles.markdownHeader__leftContent}>
        <Icon icon="logo" />
        <OpenMarkdownTitle />
      </div>
      <div className={styles.markdownHeader__rightContent}>
        <DeleteOpenMarkdownBtn />
        <SaveOpenMarkdownBtn />
      </div>
      {/* Hamburger Menu Toggle For Navigation (*Profile, Settings, Export) */}
    </header>
  );
};
