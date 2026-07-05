import styles from "./HomeContent.module.scss";
import { MarkdownEditor, MarkdownPreview } from "@/features/markdown";
import { MarkdownSidebar, NavigationSidebar } from "@/layout";

export const HomeContent = () => {
  // TODO: Replace this values with actual values from useSidebarStore
  const isMarkdownSidebarOpen = false;
  const isNavigationSidebarOpen = false;

  return (
    <section className={styles.home__content}>
      {isMarkdownSidebarOpen && <MarkdownSidebar />}
      <MarkdownEditor />
      <MarkdownPreview />
      {isNavigationSidebarOpen && <NavigationSidebar />}
    </section>
  );
};
