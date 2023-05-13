import { createPortal } from "react-dom";
import { useState } from "react";

import Backdrop from "./Backdrop";

import classes from "./Modal.module.css"
const Modal = (props) => {
  return (
    <>
      {createPortal(
        <>
          <Backdrop onCloseModal={props.onCloseModal}></Backdrop>
          <form  className={classes.form} >
            <label> Name:</label>
            <input type="text" />
            <label>Phone Number:</label>
            <input type="tel" />
            <button type="submit">Request Call</button>
          </form>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
