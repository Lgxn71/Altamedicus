import styles from "./FAQTab.module.css";

const FAQTab = (props) => {
  return (
    <ul className={styles.faqTabs}>
      <li
        className={
          props.toggleState === 1
            ? `${styles.faqTab} ${styles.active}`
            : styles.faqTab
        }
        onClick={() => props.toggleTab(1)}
      >
        Клиника
      </li>
      <li
        className={
          props.toggleState === 2
            ? `${styles.faqTab} ${styles.active}`
            : styles.faqTab
        }
        onClick={() => props.toggleTab(2)}
      >
        Пластическая хирургия
      </li>
      <li
        className={
          props.toggleState === 3
            ? `${styles.faqTab} ${styles.active}`
            : styles.faqTab
        }
        onClick={() => props.toggleTab(3)}
      >
        Гинекология
      </li>
      <li
        className={
          props.toggleState === 4
            ? `${styles.faqTab} ${styles.active}`
            : styles.faqTab
        }
        onClick={() => props.toggleTab(4)}
      >
        Эндрокринолог
      </li>
    </ul>
  );
};
export default FAQTab;
