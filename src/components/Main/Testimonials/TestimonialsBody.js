import { useState } from "react";

import TestimonialsReviewer from "./TestimonialsReviewer";

import TestimonialsText from "./TestimonialsText";

import styles from "./TestimonialsBody.module.css";

const TestimonialsBody = () => {
  const DUMMY_DATA = [
    {
      id: "ily1",
      key_reviewer: "r1",
      fullname: "Сати Ярмоленко",
      service: "Гинекология",
      imgSRC: "/img/harold.jpeg",
      comment: {
        id: "ily1",
        key_comment: "c1",
        title: "Великолепно!",
        summary: "Гинекология",
        tags: "Гинекология",
        text: "` Система клиники АльтаМедикус сегодня — одна из ведущих медицинских компаний Казахстана, оказывающая услуги в области пластической хирургии, гинекологии и эндокринологии.",
      },
    },
    {
      id: "ily2",
      key_reviewer: "r2",
      fullname: "Сати Ярмоленко",
      service: "Гинекология",
      imgSRC: "/img/harold.jpeg",
      comment: {
        id: "ily2",
        key_comment: "c2",
        title: "Великолепно!!",
        summary: "Гинекология",
        tags: "Гинекология",
        text: "` Система клиники АльтаМедикус сегодня — одна из ведущих медицинских компаний Казахстана, оказывающая услуги в области пластической хирургии, гинекологии и эндокринологии.",
      },
    },
    {
      id: "ily3",
      key_reviewer: "r3",
      fullname: "Сати Ярмоленко",
      service: "Гинекология",
      imgSRC: "/img/harold.jpeg",
      comment: {
        id: "ily3",
        key_comment: "c3",
        title: "Великолепно!!!",
        summary: "Гинекология",
        tags: "Гинекология",
        text: " Система клиники АльтаМедикус сегодня — одна из ведущих медицинских компаний Казахстана, оказывающая услуги в области пластической хирургии, гинекологии и эндокринологии.",
      },
    },
  ];

  const [activeReview, setActiveReview] = useState("ily1");

  return (
    <div className={styles["persons-container"]}>
      <ul className={styles["reviews-container"]}>
        {DUMMY_DATA.map((reviewer) => (
          <TestimonialsReviewer
            activeReview={activeReview}
            onSetActiveReview={setActiveReview}
            id={reviewer.id}
            key={reviewer.key_reviewer}
            fullname={reviewer.fullname}
            service={reviewer.service}
            imgSRC={reviewer.imgSRC}
          />
        ))}
      </ul>

      <ul>
        {DUMMY_DATA.map((review) => {
          if (activeReview !== review.comment.id) {
            return;
          }

          return (
            <TestimonialsText
              id={review.comment.id}
              key={review.comment.key_comment}
              title={review.comment.title}
              summary={review.comment.summary}
              tags={review.comment.tags}
              text={review.comment.text}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default TestimonialsBody;
