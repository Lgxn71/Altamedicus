import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Plus.module.css";

const Plus = () => {
  return <FontAwesomeIcon className={styles.iconContainer} icon={faPlus} />;
};

export default Plus;
