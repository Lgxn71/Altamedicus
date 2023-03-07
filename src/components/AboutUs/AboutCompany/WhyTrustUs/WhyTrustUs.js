import Container from "@/components/Layout/Container";
import styles from "./WhyTrustUs.module.css";

const WhyUs = (props) => {
  return (
    <section className={styles.whyTrustUs}>
      <Container>
        <div className={styles.header}>
          <p className="eyebrows">Почему именно мы</p>
          <h2>Почему нам доверяют свое здоровье?</h2>
          <p>
            В Alta Medicus Вы найдете для себя все решения для вашей красоты,
            молодости и здоровья.
          </p>
        </div>
        <ul className={styles.body}>
          <li className={styles.content}>
            <p className={styles.title}>Сертифицированные врачи</p>
            <p className={styles.description}>Все специалисты имеют квалификационные категории и ученые степени.</p>
          </li>
          <li className={styles.content}>
            <p className={styles.title}>Сертифицированные врачи</p>
            <p className={styles.description}>Все специалисты имеют квалификационные категории и ученые степени.</p>
          </li>
          <li className={styles.content}>
            <p className={styles.title}>Сертифицированные врачи</p>
            <p className={styles.description}>Все специалисты имеют квалификационные категории и ученые степени.</p>
          </li>
          <li className={styles.content}>
            <p className={styles.title}>Сертифицированные врачи</p>
            <p className={styles.description}>Все специалисты имеют квалификационные категории и ученые степени.</p>
          </li>
          <li className={styles.content}>
            <p className={styles.title}>Сертифицированные врачи</p>
            <p className={styles.description}>Все специалисты имеют квалификационные категории и ученые степени.</p>
          </li>
          <li className={styles.content}>
            <p className={styles.title}>Сертифицированные врачи</p>
            <p className={styles.description}>Все специалисты имеют квалификационные категории и ученые степени.</p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default WhyUs;
