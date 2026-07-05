import styles from "./HomeContent.module.scss";
import { MarkdownEditor, MarkdownPreview } from "@/features/markdown";
import { MarkdownSidebar, NavigationSidebar } from "@/layout";
import { useUiVisibilityStore } from "@/shared/stores";

export const HomeContent = () => {
  const markdownFlag = useUiVisibilityStore((s) => s.flags.markdownSidebar);
  const navigationFlag = useUiVisibilityStore((s) => s.flags.navigationSidebar);

  return (
    <section className={styles.home__content}>
      {markdownFlag && <MarkdownSidebar />}
      <MarkdownEditor />
      <MarkdownPreview />
      {navigationFlag && <NavigationSidebar />}
    </section>
  );
};
