import styles from "./HomeContent.module.scss";
import { MarkdownEditor, MarkdownPreview } from "@/features/markdown";
import { MarkdownSidebar, NavigationSidebar } from "@/layout";

export const HomeContent = () => {
  return (
    <section className={styles.homeContent}>
      <MarkdownSidebar />
      <div className={styles.homeContent__editorContent}>
        <MarkdownEditor />
        <hr className={styles.homeContent__divider} />
        <MarkdownPreview />
      </div>
      <NavigationSidebar />
    </section>
  );
};
