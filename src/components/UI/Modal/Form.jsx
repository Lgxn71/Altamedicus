import { useFormInput } from "@/hooks/useFormInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import ButtonPrimary from "../Buttons/ButtonPrimary.jsx";
import styles from "./Form.module.css";
const Form = ({ onCloseModal }) => {
  const fullname = useFormInput("");
  const telProps = useFormInput("");
  const detailProps = useFormInput("");

  const submitFormHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/send-message", {
      method: "POST",
      body: JSON.stringify({
        name: fullname.value,
        telephone: telProps.value,
        details: detailProps.value,
      }),
      "Content-Type": `application/json`,
    });
    onCloseModal();
  };

  return (
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
            onChange={fullname.onChange}
            value={fullname.value}
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Введите ФИО"
            required
          />
          <label htmlFor="phoneNumber">Номер Телефона</label>
          <input
            onChange={telProps.onChange}
            value={telProps.value}
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Введите номер телефона"
            required
          />
          <label htmlFor="details">Детали Запроса</label>
          <textarea
            onChange={detailProps.onChange}
            value={detailProps.value}
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
  );
};

export default Form;
