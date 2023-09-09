import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.btnPrimary}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
