import Eyebrow from "@/components/UI/Eyebrow/Eyebrow";
import Container from "@/components/UI/Container/Container";

import styles from "./OurValues.module.css";

const OurValues = () => {
  const ourValuesMap = ourValuesData.map((value) => (
    <div key={value.title} className={styles.content}>
      <p className={styles.title}>{value.title}</p>
      <p className={styles.description}>{value.text}</p>
    </div>
  ));

  return (
    <section className={styles.ourValues}>
      <Container>
        <Eyebrow
          eyebrowText="Наши ценности"
          titleText="Мы работаем вот так"
          paragraphText=" Мы считаем, что лучшая работа — та, которая приносит удовольствие поэтому мы постоянно развиваем и укрепляем нашу корпоративную культуру."
        />
        <div className={styles.body}>{ourValuesMap}</div>
      </Container>
    </section>
  );
};

export default OurValues;

const ourValuesData = [
  {
    title: "Доверие",
    text: "Признание сотрудников очень важно для развития позитивной корпоративной культуры. Ценить работу сотрудников должно быть повседневной привычкой, не требующей помпезности – иногда достаточно «Спасибо за отличную работу»!",
  },
  {
    title: "Успех клиентов",
    text: "Для нас очень важно хорошо понимать условия труда на деляне, чтобы удовлетворять нужды клиента. Мы знаем, как важно прислушиваться к нашим потребителям, и всегда открыты для предложений по улучшению нашей работы.",
  },
  {
    title: "Увлеченность",
    text: "Мы работаем методом внедрения постоянных улучшений во все аспекты деятельности нашей компании, в соответствии со схемо План-Выполнение-Контроль-Меры.",
  },
  {
    title: "Обеспечение качества",
    text: "Мы ведем комплексную работу по обеспечению качества на всех этапах операционнного процесса, чтобы добиться высочайшего качества наших услуг.",
  },
];
