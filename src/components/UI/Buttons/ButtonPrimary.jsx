import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = (props) => {
  let isInNavBar;
  if (props.inNavBar) {
    isInNavBar = styles["btn-blue-font-size-14px"];
  } else {
    isInNavBar = styles["btn-blue"];
  }

  return (
    <button onClick={props.onClick} className={isInNavBar} href="">
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
