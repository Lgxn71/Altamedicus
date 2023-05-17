import Image from "next/image";

import { testemonialsData } from "./Testimonials";

import styles from "./Persons.module.css";
const Persons = ({ toggleState, onToggleTab }) => {
  const testemonialsPersonsMap = testemonialsData.map((testemonial) => (
    <li
      key={testemonial.id}
      className={
        toggleState === testemonial.id
          ? `${styles.testimonial} ${styles.active}`
          : styles.testimonial
      }
      onClick={() => onToggleTab(testemonial.id)}
    >
      <Image
        className={styles.testimonialImg}
        src={testemonial.src}
        alt={`Фотография ${testemonial.name}`}
        width={50}
        height={50}
      />
      <div>
        <p className={styles.name}>{testemonial.name}</p>
        <p>{testemonial.service}</p>
      </div>
    </li>
  ));
  return <ul className={styles.testimonialColumn}>{testemonialsPersonsMap}</ul>;
};

export default Persons;
