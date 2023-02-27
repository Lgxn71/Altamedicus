import FAQItem from "./FAQItem";

import styles from "./FAQItems.module.css";

const FAQItems = (props) => {
  const DUMMY_DATA_2 = [
    {
      id: "f1",
      title: "What is Lorem Ipsum?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "f2",
      title: "Why do we use it?",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      id: "f3",
      title: "Where does it come from?",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC",
    },
    {
      id: "f4",
      title: "Where can i get some?",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
  ];
  const DUMMY_DATA_1 = [
    {
      id: "f1",
      title: "Запись на приём",
      text: "Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. Система клиники АльтаМедикус сегодня — одна из ведущих медицинских компаний.",
    },
    {
      id: "f2",
      title: "Часы работы центра?",
      text: "Medicine is the science and art of healing and maintaining health. It encompasses a wide range of practices and techniques aimed at diagnosing, treating, and preventing illnesses and injuries.s",
    },
    {
      id: "f3",
      title: "Чем отличается скрининг от Chehk-up?",
      text: "The history of medicine dates back to ancient times, with early practitioners using a combination of spiritual and natural remedies to treat patients. Over time, medical practices have evolved significantly, with the development of new technologies and the discovery of new treatments.",
    },
    {
      id: "f4",
      title: "Как записаться на приём врача",
      text: "In modern medicine, doctors and other healthcare professionals use a variety of tools and techniques to diagnose and treat patients, including physical exams, laboratory tests, imaging scans, and surgical procedures.",
    },
  ];
  return (
    <div>
      <div
        className={`
        ${props.selectedSection === 1 ? "faq-box-block" : styles["faq-box"]}`}
        onClick={() => props.onSelectSection(1)}
      >
        {DUMMY_DATA_1.map((element) => (
          <FAQItem key={element.id} title={element.title} text={element.text} />
        ))}
      </div>

      <div
        className={`
        ${props.selectedSection === 2 ? "faq-box-block" : styles["faq-box"]}`}
        onClick={() => props.onSelectSection(2)}
      >
        {DUMMY_DATA_2.map((element) => (
          <FAQItem key={element.id} title={element.title} text={element.text} />
        ))}
      </div>

      <div
        className={`
        ${props.selectedSection === 3 ? "faq-box-block" : styles["faq-box"]}`}
        onClick={() => props.onSelectSection(3)}
      >
        {DUMMY_DATA_1.map((element) => (
          <FAQItem key={element.id} title={element.title} text={element.text} />
        ))}
      </div>

      <div
        className={`
        ${props.selectedSection === 4 ? "faq-box-block" : styles["faq-box"]}`}
        onClick={() => props.onSelectSection(4)}
      >
        {DUMMY_DATA_2.map((element) => (
          <FAQItem key={element.id} title={element.title} text={element.text} />
        ))}
      </div>
    </div>
  );
};
export default FAQItems;
