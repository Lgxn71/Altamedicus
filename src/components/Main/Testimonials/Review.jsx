import { testemonialsData } from "./Testimonials";

import styles from "./Review.module.css";

const Review = ({ onToggleTab, toggleState }) => {
  const testemonialsReviewMap = testemonialsData.map((testemonial) => (
    <li
      key={testemonial.id}
      className={
        toggleState === testemonial.id
          ? `${styles.review} ${styles.active}`
          : styles.review
      }
      onClick={() => onToggleTab(testemonial.id)}
    >
      <p className={styles.testimonialTitle}>{testemonial.review.title}</p>
      <p className={styles.testimonialService}>{testemonial.service}</p>
      <p className={styles.testimonialText}>{testemonial.review.text}</p>
    </li>
  ));

  return <ul className={styles.testimonialContent}>{testemonialsReviewMap}</ul>;
};

export default Review;
