import React, { useState } from "react";

import Image from "next/image";
import Container from "@/components/Layout/Container";
import styles from "./Testimonials.module.css";
import TestimonialImage from "../../../../public/img/Testimonials/Testimonial_1.png";
import TestimonialImage2 from "../../../../public/img/Testimonials/Testimonial_2.png";
import TestimonialImage3 from "../../../../public/img/Testimonials/Testimonial_3.png";

const Testimonial = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className={styles.testimonials}>
      <Container>
        <div className={styles.header}>
          <p className="eyebrows">ОТЗЫВЫ</p>
          <h2>
            Что говорят <br /> наши пациенты
          </h2>
          <p>
            Мы благодарны нашим клиентам за оказанное доверие <br /> и
            положительные отзывы о совместной работе.
          </p>
        </div>
        <div className={styles.body}>
          <ul className={styles.testimonialColumn}>
            <li
              className={
                toggleState === 1
                  ? `${styles.testimonial} ${styles.active}`
                  : styles.testimonial
              }
              onClick={() => toggleTab(1)}
            >
              <Image
                className={styles.testimonialImg}
                src={TestimonialImage}
                alt="Отзывы"
                width={50}
                height={50}
              />
              <div>
                <p className={styles.name}>Назерке Абдуллова</p>
                <p className={styles.service}>Гинекология</p>
              </div>
            </li>
            <li
              className={
                toggleState === 2
                  ? `${styles.testimonial} ${styles.active}`
                  : styles.testimonial
              }
              onClick={() => toggleTab(2)}
            >
              <Image
                className={styles.testimonialImg}
                src={TestimonialImage2}
                alt="Отзывы"
                width={50}
                height={50}
              />
              <div>
                <p className={styles.name}>Ирина Ким</p>
                <p className={styles.service}>Пластическая хирургия</p>
              </div>
            </li>
            <li
              className={
                toggleState === 3
                  ? `${styles.testimonial} ${styles.active}`
                  : styles.testimonial
              }
              onClick={() => toggleTab(3)}
            >
              <Image
                className={styles.testimonialImg}
                src={TestimonialImage3}
                alt="Отзывы"
                width={50}
                height={50}
              />
              <div>
                <p className={styles.name}>Даулет Ахметов</p>
                <p className={styles.service}>Процедурный кабинет</p>
              </div>
            </li>
          </ul>
          <ul className={styles.testimonialContent}>
            <li
              className={
                toggleState === 1
                  ? `${styles.review} ${styles.active}`
                  : styles.review
              }
              onClick={() => toggleTab(1)}
            >
              <p className={styles.testimonialTitle}>
                Записалась на приём по рекомендации и не пожалела!
              </p>
              <p className={styles.testimonialService}>Гинекология</p>
              <p className={styles.testimonialText}>
                Я очень благодарна клинике за профессиональный и заботливый
                подход к моему лечению. Врачи и медсестры были очень внимательны
                и отзывчивы, и я чувствовала себя в безопасности на протяжении
                всего времени.
              </p>
            </li>
            <li
              className={
                toggleState === 2
                  ? `${styles.review} ${styles.active}`
                  : styles.review
              }
              onClick={() => toggleTab(2)}
            >
              <p className={styles.testimonialTitle}>
                Я очень довольна результатом!
              </p>
              <p className={styles.testimonialService}>Пластическая хирургия</p>
              <p className={styles.testimonialText}>
                Обратилась в клинику по вопросу отопластики. На консультации все
                доступно объяснили. Операцию по моему желанию назначили в
                максимально короткие сроки.
              </p>
            </li>
            <li
              className={
                toggleState === 3
                  ? `${styles.review} ${styles.active}`
                  : styles.review
              }
              onClick={() => toggleTab(3)}
            >
              <p className={styles.testimonialTitle}>Рекомендую всем!</p>
              <p className={styles.testimonialService}>Процедурный кабинет</p>
              <p className={styles.testimonialText}>
                Самые приятные впечатления остались после визита. Очень
                внимательный, профессиональный подход и искреннее душевное
                отношение. Спасибо большое за Ваш труд!
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
