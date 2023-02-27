import Hero from "@/components/Hero/Hero";
import ContainerWithoutSpace from "@/components/UI/Container/ContainerWithoutSpace";


import styles from "./Hiring.module.css";
import HiringItem from "./HiringItem";

const Hiring = (props) => {
  const DUMMY_DATA = [
    {
      id: "01",
      title: "Проверка Документов",
      paragraph:
        "Мы проводим проверку документов, подтверждающих квалификацию и опыт работы кандидата, таких как дипломы, сертификаты, лицензии и другие профессиональные документы. Также мы проверяем личную и финансовую историю кандидата, чтобы убедиться в его надежности и честности.",
    },
    {
      id: "02",
      title: "Собеседование",
      paragraph:
        "После проверки документов мы приглашаем кандидата на собеседование, где обсуждаем его профессиональные навыки, опыт работы, личностные качества и мотивацию. Мы также рассказываем о нашей клинике, ее ценностях и целях, чтобы убедиться, что кандидат подходит нам не только по квалификации, но и по нашим общим ценностям.",
    },
    {
      id: "03",
      title: "Проверка Документов",
      paragraph:
        "Мы проводим проверку документов, подтверждающих квалификацию и опыт работы кандидата, таких как дипломы, сертификаты, лицензии и другие профессиональные документы. Также мы проверяем личную и финансовую историю кандидата, чтобы убедиться в его надежности и честности.",
    },
  ];

  return (
    <>
      <Hero
        spaceBottom="100"
        onSideBar={props.onSideBar}
        titleWidth="888"
        paragraphWidth="narrow"
        greyishText="Мы постоянно нанимаем талантливых людей"
        textBeforeHighlight="Мы "
        highlighted="Нанимаем"
      />
      <ContainerWithoutSpace>
        <h4 className={styles.title}>Как подать на работу?</h4>
        <p className="text-gray">
          Мы постоянно развиваемся и ищем новых талантливых людей для работы в
          нашей команде. Если вы ищете работу в здравоохранении и хотите
          работать в динамичной и прогрессивной среде, мы приглашаем вас подать
          заявку на работу в нашу клинику. При подаче заявки убедитесь, что вы
          предоставили полную информацию о себе и своем опыте работы, а также
          приложили свое резюме и сопроводительное письмо.
        </p>
        <span className={styles.space}></span>
        <div>
          <ul className={styles["unorder-list"]}>
            <li className={styles.list}>Резюме</li>
            <li className={styles.list}>Сопроводительное письмо</li>
          </ul>
        </div>

        <p className="text-gray">
          Отправьте ниже перечисленные документы по электронной почте
          <span> </span>
          <a href="mailto:recruit@artamedicus.com" className={styles.mail}>
            recruit@artamedicus.com
          </a>
          <span> </span>
          или позвоните по номеру
          <span className={styles.phoneNumber}> + (7172)642-123 </span>
        </p>
        <div className={styles.steps}>
          <h4 className={styles.title}>Процесс найма</h4>
          <p className="text-gray">
            Процесс найма для нашей клиники состоит из трех этапов.
          </p>
        </div>

        <ul className={styles.cards}>
          {DUMMY_DATA.map((item) => (
            <HiringItem
              id={item.id}
              key={item.id}
              title={item.title}
              paragraph={item.paragraph}
            />
          ))}
        </ul>
      </ContainerWithoutSpace>
    </>
  );
};
export default Hiring;
