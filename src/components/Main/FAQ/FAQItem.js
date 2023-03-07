import { useState } from "react";
import styles from "./FAQItem.module.css";

// Importing FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const FAQItem = (props) => {
  const [open, setOpen] = useState(false);

  const dropHandler = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.singleFAQ} onClick={dropHandler}>
      <div className={styles.description}>
        <p className={styles.title}>{props.title}</p>
        <p
          className={
            open ? `${styles.answer} ${styles.displayBlock}` : styles.answer
          }
        >
          {props.answer}
        </p>
      </div>
      <FontAwesomeIcon
        className={`${styles["faq-icon"]} 
          ${!open ? styles["faq-icon-active"] : ""}`}
        icon={faPlus}
        rotation={180}
      />
    </div>
  );
};

export default FAQItem;
