import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./Chervron.module.css";
const Chevron = () => {
  return <FontAwesomeIcon  className={styles.iconContainer} icon={faChevronDown} />;
};

export default Chevron;
