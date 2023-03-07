import styles from "./UslugiDetails.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const UslugiDetails = ({ title, description, isOpen, onClick }) => {
  return (
    <li className={styles.service} onClick={onClick}>
      <div className={styles.serviceHeader}>
        <p className={styles.title}>{title}</p>
        <FontAwesomeIcon icon={faPlus} className={styles.icon} />
      </div>
      {isOpen && <p className={styles.description}>{description}</p>}
    </li>
  );
};

export default UslugiDetails;
