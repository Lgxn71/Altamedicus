import { useState } from "react";

import Plus from "@/components/UI/Icons/Plus/Plus";

import styles from "./FAQItem.module.css";

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
          className={`${styles.paragraph}
        ${open ? styles.displayBlock : styles.answer}`}
        >
          {props.answer}
        </p>
      </div>
      <Plus />
    </div>
  );
};

export default FAQItem;
