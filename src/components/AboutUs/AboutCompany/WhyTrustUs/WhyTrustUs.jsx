import Eyebrow from "@/components/UI/Eyebrow/Eyebrow";
import Container from "@/components/UI/Container/Container";
import styles from "./WhyTrustUs.module.css";

const WhyUs = (props) => {
  const whyTrustUsDataMap = whyTrustUsData.map((data) => (
    <li className={styles.content} key={data.id}>
      <p className={styles.title}>{data.title}</p>
      <p className={styles.description}>{data.text}</p>
    </li>
  ));

  return (
    <section className={styles.whyTrustUs}>
      <Container>
        <Eyebrow
          eyebrowText="Почему именно мы"
          titleText="Почему нам доверяют свое здоровье?"
          paragraphText="В Alta Medicus Вы найдете для себя все решения для вашей красоты, молодости и здоровья."
        />
        <ul className={styles.body}>{whyTrustUsDataMap}</ul>
      </Container>
    </section>
  );
};

export default WhyUs;

const whyTrustUsData = [
  {
    id: 1,
    title: "Сертифицированные врачи",
    text: "Все специалисты имеют квалификационные категории и ученые степени.",
  },
  {
    id: 2,
    title: "Современные технологии",
    text: "В своей работе мы применяем современные методы диагностики и лечения.",
  },
  {
    id: 3,
    title: "Многолетний опыт",
    text: "Средний профессиональный стаж врачей в Alta Medicus clinic - 20 лет.",
  },
  {
    id: 4,
    title: "Мы работаем на качество",
    text: "70% наших пациентов приходят к нам по рекомендации, а это многое значит!",
  },
  {
    id: 5,
    title: "Амбулаторная хирургия",
    text: "Операции выполняются без необходимости круглосуточного пребывания в клинике .",
  },
  {
    id: 6,
    title: "У нас нет очередей",
    text: "У нас уютная атмосфера без очередей и скопления пациентов.",
  },
];
