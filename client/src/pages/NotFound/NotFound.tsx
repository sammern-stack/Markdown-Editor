import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 Page not found</h1>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default NotFound;
