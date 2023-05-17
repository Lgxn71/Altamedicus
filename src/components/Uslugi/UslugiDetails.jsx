import Plus from "../UI/Icons/Plus/Plus";
import styles from "./UslugiDetails.module.css";

const UslugiDetails = ({ title, description, isOpen, onClick }) => {
  return (
    <li className={styles.service} onClick={onClick}>
      <div className={styles.serviceHeader}>
        <p className={styles.title}>{title}</p>
        <Plus />
      </div>
      {isOpen && <p className={styles.description}>{description}</p>}
    </li>
  );
};

export default UslugiDetails;
