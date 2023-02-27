import { useState } from "react";

import styles from "./OurPrinciplesBody.module.css";
import OurPrinciple from "./OurPrinciple";
const OurPrinciplesBody = () => {
  const DUMMY_DATA1 = [
    {
      id: "o1",
      title: "Доверие",
      paragraph:
        "Признание сотрудников очень важно для развития позитивной корпоративной культуры. Ценить работу сотрудников должно быть повседневной привычкой, не требующей помпезности – иногда достаточно «Спасибо за отличную работу»!",
    },
    {
      id: "o2",
      title: "Успех клиентов",
      paragraph:
        "Для нас очень важно хорошо понимать условия труда на деляне, чтобы удовлетворять нужды клиента. Мы знаем, как важно прислушиваться к нашим потребителям, и всегда открыты для предложений по улучшению нашей работы.",
    },
    {
      id: "o3",
      title: "Увлеченность",
      paragraph:
        "Мы работаем методом внедрения постоянных улучшений во все аспекты деятельности нашей компании, в соответствии со схемой План-Выполнение-Контроль-Меры.",
    },
    {
      id: "o4",
      title: "Обеспечение качества",
      paragraph:
        "Мы ведем комплексную работу по обеспечению качества на всех этапах операционнного процесса, чтобы добиться высочайшего качества наших услуг.",
    },
  ];
  const DUMMY_DATA2 = [
    {
      id: "o1",
      title: "What is Lorem Ipsum?",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: "o2",
      title: "Why do we use it?",
      paragraph:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: "o3",
      title: "Where does it come from?",
      paragraph:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
    },
    {
      id: "o4",
      title: "Where can I get some?",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
  ];

  const [selectedSection, setSelectedSection] = useState(1);
  const sectionClickHandler = () => {
    if (selectedSection === 1) {
      setSelectedSection(2);
    } else {
      setSelectedSection(1);
    }
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles.headers}>
        <p
          onClick={sectionClickHandler}
          className={`text-gray ${styles.section} ${
            selectedSection === 1 ? styles.active : ""
          }`}
        >
          Корпоративная культура
        </p>
        <p
          onClick={sectionClickHandler}
          className={`text-gray ${styles.section} ${
            selectedSection === 2 ? styles.active : ""
          }`}
        >
          Одна семья
        </p>
      </div>
      <div className={styles["principles-container"]}>
        {selectedSection === 1 &&
          DUMMY_DATA1.map((principle) => {
            return (
              <OurPrinciple
                key={principle.id}
                title={principle.title}
                paragraph={principle.paragraph}
              />
            );
          })}
        {selectedSection === 2 &&
          DUMMY_DATA2.map((principle) => {
            return (
              <OurPrinciple
                key={principle.id}
                title={principle.title}
                paragraph={principle.paragraph}
              />
            );
          })}
      </div>
    </div>
  );
};
export default OurPrinciplesBody;
