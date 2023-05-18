import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onCloseModal} className={styles.backdrop} />;
};
export default Backdrop;
