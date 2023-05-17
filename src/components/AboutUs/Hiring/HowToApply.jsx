import styles from "./HowToApply.module.css";

const HowToApply = () => {
  return (
    <article style={{ marginTop: "-125px" }}>
      <h2 className={styles.title}>Как подать на работу?</h2>
      <div className={styles.description}>
        <p>
          Если вы ищете работу в здравоохранении и хотите работать в динамичной
          и прогрессивной среде, мы приглашаем вас подать заявку на работу в
          нашу клинику. При подаче заявки убедитесь, что вы предоставили полную
          информацию о себе и своем опыте работы, а также приложили свое резюме
          и сопроводительное письмо.
        </p>
        <ul className={styles.ul}>
          <li className={styles.blackText}>Резюме</li>

          <li className={styles.blackText}>Сопроводительное письмо</li>
        </ul>
        <p>
          Отправьте ниже перечисленные документы по электронной почте{" "}
          <a href="mailto:alta.medicus@mail.ru" className={styles.blueText}>
            alta.medicus@mail.ru{" "}
          </a>
          <span> или позвоните по номеру </span>
          <span className={styles.blackText}>
            +7172 77 77 69, +7 775 477 8811
          </span>
        </p>
      </div>
    </article>
  );
};

export default HowToApply;
