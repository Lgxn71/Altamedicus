import styles from "./CTATitle.module.css";
const CTATitle = (props) => {
  const { title, paragraph } = props;
  return (
    <>
      <h2>{title}</h2>
      <p className={styles.subTitle}>{paragraph}</p>
    </>
  );
};

export default CTATitle;
