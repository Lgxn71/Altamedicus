import React, { useState, useEffect } from "react";

import TitleEyebrow from "@/components/TitleEyebrow/TitleEybrow";
import Container from "@/components/UI/Container/Container";
import styles from "./USP.module.css";
import USPItem from "./USPItem";

const USP = (props) => {
  const dummy = [
    {
      id: "z1",
      title: "Сертифицированные врачи",
      paragraph:
        "Все специалисты имеют квалификационные категории и ученые степени.",
    },
    {
      id: "z2",
      title: "Современные технологии",
      paragraph:
        "В своей работе мы применяем современные методы диагностики и лечения.",
    },
    {
      id: "z3",
      title: "Многолетний опыт",
      paragraph:
        "Средний профессиональный стаж врачей в Alta Medicus clinic - 20 лет",
    },
    {
      id: "z4",
      title: "Мы работаем на качество",
      paragraph:
        "70% наших пациентов приходят к нам по рекомендации, а это многое значит!",
    },
    {
      id: "z5",
      title: "Амбулаторная хирургия",
      paragraph:
        "Операции  выполняются без необходимости круглосуточного пребывания в клинике .",
    },
    {
      id: "z6",
      title: "У нас нет очередей",
      paragraph: "У нас уютная атмосфера без очередей и скопления пациентов.",
    },
  ];

  return (
    <div className="background-color-dark-white">
      <Container>
        <TitleEyebrow
          eyebrowText="Почему нам доверяют свое здоровье?"
          titleText="Почему нам доверяют свое здоровье?"
          paragraph="Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. "
        />

        <div className={styles["items-container"]}>
          {dummy.map((item) => (
            <USPItem
              key={item.id}
              title={item.title}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
export default USP;
