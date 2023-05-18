import { createPortal } from "react-dom";

import Backdrop from "./Backdrop.jsx";
import Form from "./Form.jsx";

const Modal = ({ onCloseModal }) => {
  return (
    <>
      {createPortal(
        <>
          <Backdrop onCloseModal={onCloseModal} />
          <Form onCloseModal={onCloseModal} />
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
