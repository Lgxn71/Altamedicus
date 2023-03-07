import Container from "@/components/Layout/Container";
import styles from "./Numbers.module.css";

const Numbers = () => {
  return (
    <section className={styles.numbers}>
      <Container>
        <div className={styles.header}>
          <h2>Клиника Alta Medicus сегодня это:</h2>
          <p>Наши достижения в медицинском путешествии обозначено цифрами</p>
        </div>
        <ul className={styles.achievements}>
          <li className={styles.singleAchievement}>
            <p className={styles.number}>+3000</p>
            <p className={styles.achievementText}>
              <span>Благодарных</span>
              <span>пациентов</span>
            </p>
          </li>
          <li className={styles.singleAchievement}>
            <p className={styles.number}>+70</p>
            <p className={styles.achievementText}>
              <span>Научных</span>
              <span>статей</span>
            </p>
          </li>
          <li className={styles.singleAchievement}>
            <p className={styles.number}>+2000</p>
            <p className={styles.achievementText}>
              <span>Операций</span>
              <span>в год</span>
            </p>
          </li>
          <li className={styles.singleAchievement}>
            <p className={styles.number}>+100</p>
            <p className={styles.achievementText}>
              <span>Дипломов</span>
              <span>и Наград</span>
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Numbers;
