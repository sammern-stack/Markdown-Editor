import styles from "./NavigationSidebar.module.scss";
import { useUiVisibilityStore } from "@/shared/stores";

export const NavigationSidebar = () => {
  const navigationFlag = useUiVisibilityStore((s) => s.flags.navigationSidebar);
  const activeClass = navigationFlag && styles["navigationSidebar--active"];

  return (
    <aside className={`${styles.navigationSidebar} ${activeClass}`}>
      <p className={styles.navigationSidebar__title}>My documents</p>

      {/* A List of all the navigation actions */}

      {/* A Theme toggle for light and dark theme */}
    </aside>
  );
};
