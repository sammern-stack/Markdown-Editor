import styles from "./Home.module.scss";
import { MarkdownHeader, HomeContent } from "@/layout"

const Home = () => {
  return (
    <div className={styles.home}>
      <MarkdownHeader />
      <HomeContent />
    </div>
  );
};

export default Home;
