import { useState } from "react";

import Container from "@/components/UI/Container/Container";
import TitleEyebrow from "@/components/TitleEyebrow/TitleEybrow";

import FAQItems from "./FAQItems";
import FAQLinks from "./FAQLinks";

import styles from "./FAQ.module.css";

const FAQ = () => {
  

  const [selectedSection, setSelectedSection] = useState(1);

  const selectSection = (index) => {
    setSelectedSection(index);
  };
  return (
    <Container>
      <TitleEyebrow
        eyebrowText="Вопросы и Ответы"
        titleText="Часто Задаваемые Вопросы"
        paragraph="Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками."
      />
      <div className={styles["-container"]}>
        <div className={styles["faq-content"]}>
          <FAQLinks
            selectedSection={selectedSection}
            onSelectSection={selectSection}
          />
          <FAQItems
            selectedSection={selectedSection}
            onSelectSection={selectSection}
          />
        </div>
      </div>
    </Container>
  );
};
export default FAQ;
