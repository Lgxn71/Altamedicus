import { useState } from "react";

import Container from "@/components/UI/Container/Container";

import Eyebrow from "@/components/UI/Eyebrow/Eyebrow";

import styles from "./Testimonials.module.css";

const Testimonial = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className={styles.testimonials}>
      <Container>
        <Eyebrow
          eyebrowText="ОТЗЫВЫ"
          titleText="Что говорят наши пациенты"
          paragraphText=" Мы благодарны нашим клиентам за оказанное доверие и положительные отзывы о совместной работе."
        />

        <div className={styles.body}>
          <Persons toggleState={toggleState} onToggleTab={toggleTab} />
          <Review toggleState={toggleState} onToggleTab={toggleTab} />
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;

import TestimonialImage from "/public/img/Testimonials/Testimonial_1.png";
import TestimonialImage2 from "/public/img/Testimonials/Testimonial_2.png";
import TestimonialImage3 from "/public/img/Testimonials/Testimonial_3.png";
import Persons from "./Persons";
import Review from "./Review";

export const testemonialsData = [
  {
    name: "Назерке Абдуллова",
    service: "Гинекология",
    src: TestimonialImage,
    id: 1,
    review: {
      title: "Записалась на приём по рекомендации и не пожалела!",
      text: "Я очень благодарна клинике за профессиональный и заботливый подход к моему лечению. Врачи и медсестры были очень внимательны и отзывчивы, и я чувствовала себя в безопасности на протяжении всего времени.",
    },
  },
  {
    name: "Ирина Ким",
    service: "Пластическая хирургия",
    src: TestimonialImage2,
    review: {
      title: "Я очень довольна результатом!",
      text: "Обратилась в клинику по вопросу отопластики. На консультации все доступно объяснили. Операцию по моему желанию назначили в максимально короткие сроки.",
    },
    id: 2,
  },
  {
    name: "Даулет Ахметов",
    service: "Процедурный кабинет",
    src: TestimonialImage3,
    review: {
      title: "Рекомендую всем!",
      text: "Самые приятные впечатления остались после визита. Очень внимательный, профессиональный подход и искреннее душевное отношение. Спасибо большое за Ваш труд!",
    },
    id: 3,
  },
];
