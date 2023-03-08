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
            <p className={styles.title}>Современные технологии</p>
            <p className={styles.description}>В своей работе мы применяем современные методы диагностики и лечения.</p>
          </li>
          <li className={styles.content}>
            <p className={styles.title}>Многолетний опыт</p>
            <p className={styles.description}>Средний профессиональный стаж врачей в Alta Medicus clinic - 20 лет.</p>
          </li>
          <li className={styles.content}>
            <p className={styles.title}>Мы работаем на качество</p>
            <p className={styles.description}>70% наших пациентов приходят к нам по рекомендации, а это многое значит!</p>
          </li>
          <li className={styles.content}>
            <p className={styles.title}>Амбулаторная хирургия</p>
            <p className={styles.description}>Операции  выполняются без необходимости круглосуточного пребывания в клинике .</p>
          </li>
          <li className={styles.content}>
            <p className={styles.title}>У нас нет очередей</p>
            <p className={styles.description}>У нас уютная атмосфера без очередей и скопления пациентов.</p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default WhyUs;
