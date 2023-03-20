import styles from "./SpecialistCard.module.css";
import Image from "next/image";

const SpecialistCard = (props) => {
  return (
    <li className={styles.employeeCard}>
      <div className={styles.imgContainer}>
        <Image
          src={props.imageSrc}
          alt="Фотография Доктора"
          className={styles.IMG}
        />
      </div>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.occupation}>{props.occupation}</p>
    </li>
  );
};

export default SpecialistCard;
