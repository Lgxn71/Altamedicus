import Container from "./Container";
import styles from "./CTA.module.css";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";

const CTA = () => {
  return (
    <section className={styles.callToAction}>
      <Container>
        <div className={styles.row}>
          <div className={`${styles.column} ${styles.firstColumn}`}>
            <h2>Остались вопросы? Закажите Звонок!</h2>
            <p className={styles.subTitle}>
              Перезвоним, проконсультируем, и запишем Вас на прием!
            </p>
            <ButtonPrimary>Заказать звонок</ButtonPrimary>
          </div>
          <div className={styles.column}>
            <h2>Свяжитесь с нами</h2>
            <div className={styles.columnInfo}>
              <ul className={styles.clinicInfo}>
                <li className={styles.detailInfo}>
                  <p>Телефон</p>
                  <p>+7172 77 77 69</p>
                </li>
                <li className={styles.detailInfo}>
                  <p>Email</p>
                  <p>alta.medicus@mail.ru</p>
                </li>
                <li className={styles.detailInfo}>
                  <p>Адрес</p>
                  <p>Ул.Кенесары 8, 3 этаж</p>
                </li>
              </ul>
              <ul className={styles.clinicInfo}>
                <li className={styles.detailInfo}>
                  <p>Сот. номер</p>
                  <p>++7 775 477 8811</p>
                </li>
                <li className={styles.detailInfo}>
                  <p>Соц. сети</p>
                  <p>Instagram: @altamedicus</p>
                </li>
                <li className={styles.detailInfo}>
                  <p>Время работы</p>
                  <p>
                    Пн-Пт: 09:00-19:00 <br /> Сб: 09:00-16:00
                  </p>
                </li>
              </ul>
            </div>
            <ul className={styles.clinicInfo}></ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
