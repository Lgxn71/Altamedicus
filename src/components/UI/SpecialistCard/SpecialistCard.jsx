import Image from "next/image";

import styles from "./SpecialistCard.module.css";

const SpecialistCard = (props) => {
  return (
    <li className={styles.employeeCard}>
      <div className={styles.imgContainer}>
        <Image
          width={500}
          height={500}
          src={props.imageSrc}
          alt={`Фотография Доктора ${props.name}`}
          className={styles.IMG}
        />
      </div>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.occupation}>{props.occupation}</p>
    </li>
  );
};

export default SpecialistCard;
