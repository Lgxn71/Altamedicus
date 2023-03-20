import { useState } from "react";
import Hero from "../Main/Hero/Hero";
import Service from "./Service";
import ContainerWithoutSpace from "../UI/Container/ContainerWithoutSpace";
import styles from "./Services.module.css";
const Services = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "Пластическая хирургия",
      paragraph: "text",
      isOpen: false,
    },
    { id: 2, title: "Гинекология", paragraph: "text", isOpen: false },
    { id: 3, title: "УЗИ", paragraph: "text", isOpen: false },
    { id: 4, title: "Эндокринология", paragraph: "text", isOpen: false },
    { id: 5, title: "Кардиология", paragraph: "text", isOpen: false },
    { id: 6, title: "Лор", paragraph: "text", isOpen: false },
    {
      id: 7,
      title: "Процедурный кабинет",
      paragraph: "text",
      isOpen: false,
    },
    { id: 8, title: "Дерматалогия", paragraph: "text", isOpen: false },
    { id: 9, title: "Терапия", paragraph: "text", isOpen: false },
    { id: 10, title: "Неврология", paragraph: "text", isOpen: false },
    { id: 11, title: "Онкология", paragraph: "text", isOpen: false },
    {
      id: 12,
      title: "Торакальная хирургия",
      paragraph: "text",
      isOpen: false,
    },
  ];
  const [services, setService] = useState(DUMMY_DATA);

  const clickHandler = (id) => {
    setService((prevService) =>
      prevService.map((service) =>
        service.id === id
          ? { ...service, isOpen: !service.isOpen }
          : { ...service, isOpen: false }
      )
    );
  };
  return (
    <>
      <Hero
        spaceBottom="50"
        titleWidth="888"
        textBeforeHighlight="Мы предоставляем "
        highlighted="качественные"
        textAfterHighlight=" услуги"
        paragraphWidth="narrow"
        greyishText="Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками."
      />
      <ContainerWithoutSpace>
        <div className={styles["service-container"]}>
          {services.map((service) => (
            <Service
              key={service.id}
              service={service}
              onClickHandler={clickHandler}
            >
              {console.log(service)}
            </Service>
          ))}
        </div>
      </ContainerWithoutSpace>
    </>
  );
};
export default Services;
