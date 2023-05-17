import styles from "./FAQTab.module.css";

const FAQTab = (props) => {
  const sectionIndexes = [
    { index: 0, text: "Клиника" },
    { index: 1, text: "Пластическая хирургия" },
    { index: 2, text: "Гинекология" },
    { index: 3, text: "Эндрокринолог" },
  ];

  const sectionMap = sectionIndexes.map((section) => (
    <li
      key={section.index}
      onClick={() => props.toggleTab(section.index)}
      className={
        props.toggleState === section.index
          ? `${styles.faqTab} ${styles.active}`
          : styles.faqTab
      }
    >
      {section.text}
    </li>
  ));

  return <ul className={styles.faqTabs}>{sectionMap}</ul>;
};
export default FAQTab;
