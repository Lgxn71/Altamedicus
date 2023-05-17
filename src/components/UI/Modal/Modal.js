import { useFormInput } from "@/hooks/useFormInput";

import { createPortal } from "react-dom";

import Backdrop from "./Backdrop";

import classes from "./Modal.module.css";

const Modal = (props) => {
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
  };
  return (
    <>
      {createPortal(
        <>
          <Backdrop onCloseModal={props.onCloseModal}></Backdrop>
          <form onSubmit={submitFormHandler} className={classes.form}>
            <label htmlFor="name"> Name:</label>
            <input
              onChange={nameProps.onChange}
              value={nameProps.value}
              id="name"
              name="name"
              type="text"
            />
            <label>Phone Number:</label>
            <input
              onChange={telProps.onChange}
              value={telProps.value}
              htmlFor="phone"
              type="tel"
            />
            <button type="submit" name="phone" id="phone">
              Request Call
            </button>
          </form>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
