import Container from "../Layout/Container";
import styles from "./Contacts.module.css";
import Image from "next/image";
import map from "../../../public/img/map.png"

const Contacts = () => {
  return (
    <section>
      <Container>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>
              Мы находимся <span className="highlight">здесь</span>
            </h1>
            <p>
              Удобное расположение - плюс Alta Medicus Clinic, ведь в мегаполисе
              так важно экономить каждую минуту.
            </p>
          </div>
        </div>
        <ul className={styles.body}>
          <li className={styles.description}>
            <p className={styles.title}>Телефон</p>
            <p className={styles.info}>+7172 77 77 69</p>
          </li>
          <li className={styles.description}>
            <p className={styles.title}>Адрес</p>
            <p className={styles.info}>Ул.Кенесары 8, 3 этаж</p>
          </li>
          <li className={styles.description}>
            <p className={styles.title}>Соц. сети</p>
            <p className={styles.info}>Instagram: @altamedicus</p>
          </li>
          <li className={styles.description}>
            <p className={styles.title}>Сот. номер</p>
            <p className={styles.info}>+7 775 477 8811</p>
          </li>
          <li className={styles.description}>
            <p className={styles.title}>Email</p>
            <p className={styles.info}>alta.medicus@mail.ru</p>
          </li>
          <li className={styles.description}>
            <p className={styles.title}>Время работы</p>
            <p className={styles.info}>Пн-Пт: 09:00-19:00 Сб: 09:00-16:00</p>
          </li>
        </ul>
        <Image src={map} alt="карта" className={styles.map} />
      </Container>
    </section>
  );
};
export default Contacts;
