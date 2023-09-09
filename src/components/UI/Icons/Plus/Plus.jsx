import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Plus.module.css";

const Plus = ({ isOpen }) => {
  return (
    <FontAwesomeIcon
      className={`${styles.iconContainer} ${isOpen ? styles.transform : ""}`}
      icon={faPlus}
    />
  );
};

export default Plus;
