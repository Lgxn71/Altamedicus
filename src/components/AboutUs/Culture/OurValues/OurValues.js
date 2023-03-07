import Container from "@/components/Layout/Container";
import styles from "./OurValues.module.css";

const OurValues = () => {
  return (
    <section className={styles.ourValues}>
      <Container>
        <div className={styles.header}>
          <p className="eyebrows">Наши ценности</p>
          <h2>Мы работаем вот так</h2>
          <p>
            Мы считаем, что лучшая работа — та, которая приносит удовольствие
            поэтому мы постоянно развиваем и укрепляем нашу корпоративную
            культуру.
          </p>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <p className={styles.title}>Доверие</p>
            <p className={styles.description}>
              Признание сотрудников очень важно для развития позитивной
              корпоративной культуры. Ценить работу сотрудников должно быть
              повседневной привычкой, не требующей помпезности – иногда
              достаточно «Спасибо за отличную работу»!
            </p>
          </div>
          <div className={styles.content}>
            <p className={styles.title}>Успех клиентов</p>
            <p className={styles.description}>
              Для нас очень важно хорошо понимать условия труда на деляне, чтобы
              удовлетворять нужды клиента. Мы знаем, как важно прислушиваться к
              нашим потребителям, и всегда открыты для предложений по улучшению
              нашей работы.
            </p>
          </div>

          <div className={styles.content}>
            <p className={styles.title}>Увлеченность</p>
            <p className={styles.description}>
              Мы работаем методом внедрения постоянных улучшений во все аспекты
              деятельности нашей компании, в соответствии со схемой
              План-Выполнение-Контроль-Меры.
            </p>
          </div>
          <div className={styles.content}>
            <p className={styles.title}>Обеспечение качества</p>
            <p className={styles.description}>
              Мы ведем комплексную работу по обеспечению качества на всех этапах
              операционнного процесса, чтобы добиться высочайшего качества наших
              услуг.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurValues;
