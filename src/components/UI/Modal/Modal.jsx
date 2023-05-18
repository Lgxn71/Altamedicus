import { useFormInput } from "@/hooks/useFormInput";

import { createPortal } from "react-dom";

import Backdrop from "./Backdrop.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import styles from "./Modal.module.css";
import ButtonPrimary from "../Buttons/ButtonPrimary.jsx";

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
          <form onSubmit={submitFormHandler} action="">
            <div className={styles.form}>
              <div className={styles.header}>
                <h4>Заказать Звонок</h4>
                <FontAwesomeIcon
                  icon={faX}
                  onClick={onCloseModal}
                  className={styles.iconContainer}
                />
              </div>
              <div className={styles.body}>
                <label htmlFor="fullname">ФИО</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Введите ФИО"
                  required
                />
                <label htmlFor="phoneNumber">Номер Телефона</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Введите номер телефона"
                  required
                />
                <label htmlFor="details">Детали Запроса</label>
                <textarea
                  name="details"
                  id="details"
                  placeholder="Кратко опишите детали запроса"
                />
              </div>
              <div className={styles.actions}>
                <ButtonPrimary>Заказать Звонок</ButtonPrimary>
              </div>
            </div>
          </form>

          {/* <form onSubmit={submitFormHandler} className={styles.form}>
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
          </form> */}
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
