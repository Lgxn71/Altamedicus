import Container from "@/components/Layout/Container";
import styles from "./Hiring.module.css";

const Hiring = () => {
  return (
    <section>
      <Container>
        <div className={styles.header}>
          <h1>
            Мы <span className="highlight">нанимаем</span>
          </h1>
          <p>
            Мы постоянно развиваемся и ищем новых талантливых людей для работы в
            нашей команде.
          </p>
        </div>
        <div className={styles.body}>
          <div className={styles.row}>
            <p className={styles.title}>Как подать на работу?</p>
            <p className={styles.description}>
              Если вы ищете работу в здравоохранении и хотите работать в
              динамичной и прогрессивной среде, мы приглашаем вас подать заявку
              на работу в нашу клинику. При подаче заявки убедитесь, что вы
              предоставили полную информацию о себе и своем опыте работы, а
              также приложили свое резюме и сопроводительное письмо.
              <br />
              <span className={styles.blackText}>- Резюме</span>
              <br />
              <span className={styles.blackText}>
                - Сопроводительное письмо
              </span>
              Отправьте ниже перечисленные документы по электронной почте{" "}
              <span className={styles.blueText}>alta.medicus@mail.ru</span> или
              позвоните по номеру{" "}
              <span className={styles.blackText}>
                +7172 77 77 69, +7 775 477 8811
              </span>
            </p>
          </div>
          <div className={styles.row}>
            <p className={styles.title}>Процесс найма</p>
            <p className={styles.description}>
              Процесс найма для нашей клиники состоит из трех этапов.
            </p>
            <ul className={styles.hiringProcess}>
              <li className={styles.hiringDetails}>
                <h2>01</h2>
                <p className={styles.title}>Проверка Документов</p>
                <p>
                  Мы проводим проверку документов, подтверждающих квалификацию и
                  опыт работы кандидата, таких как дипломы, сертификаты,
                  лицензии и другие профессиональные документы. Также мы
                  проверяем личную и финансовую историю кандидата, чтобы
                  убедиться в его надежности и честности.
                </p>
              </li>
              <li className={styles.hiringDetails}>
                <h2>02</h2>
                <p className={styles.title}>Собеседование</p>
                <p>
                  После проверки документов мы приглашаем кандидата на
                  собеседование, где обсуждаем его профессиональные навыки, опыт
                  работы, личностные качества и мотивацию. Мы также рассказываем
                  о нашей клинике, ее ценностях и целях, чтобы убедиться, что
                  кандидат подходит нам не только по квалификации, но и по нашим
                  общим ценностям.
                </p>
              </li>
              <li className={styles.hiringDetails}>
                <h2>03</h2>
                <p className={styles.title}>Найм</p>
                <p>
                  Если кандидат успешно прошел проверку документов и
                  собеседование, мы предлагаем ему официальное трудоустройство в
                  нашей клинике. Мы обсуждаем с ним условия работы, зарплату,
                  бенефиты и другие важные детали, чтобы убедиться, что мы
                  находимся на одной волне и можем успешно работать вместе.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hiring;
