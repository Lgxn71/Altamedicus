import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = (props) => {
  return (
    <button onClick={props.onClick} className={styles.btnPrimary} href="">
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
