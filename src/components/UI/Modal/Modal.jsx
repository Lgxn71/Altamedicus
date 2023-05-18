import { useFormInput } from "@/hooks/useFormInput";

import { createPortal } from "react-dom";

import Backdrop from "./Backdrop.jsx";

import styles from "./Modal.module.css";

const Modal = ({ onCloseModal }) => {
  const nameProps = useFormInput("");
  const telProps = useFormInput("");

  const submitFormHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/send-message", {
      method: "POST",
      body: JSON.stringify({
        name: nameProps.value,
        telephone: telProps.value,
      }),
      "Content-Type": `application/json`,
    });
    console.log(response);
  };
  return (
    <>
      {createPortal(
        <>
          <Backdrop onCloseModal={onCloseModal} />
          <form onSubmit={submitFormHandler} className={styles.form}>
            <label htmlFor="name"> Name:</label>
            <input
              onChange={nameProps.onChange}
              value={nameProps.value}
              id="name"
              name="name"
              type="text"
            />
            <label htmlFor="phone">Phone Number:</label>
            <input
              onChange={telProps.onChange}
              value={telProps.value}
              id="phone"
              name="phone"
              type="tel"
            />
            <button type="submit">Request Call</button>
          </form>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
