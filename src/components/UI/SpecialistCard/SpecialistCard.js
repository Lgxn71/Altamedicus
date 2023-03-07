import styles from "./SpecialistCard.module.css";
import Image from "next/image";

const SpecialistCard = (props) => {
  return (
    <li className={styles.employeeCard}>
      <Image src={props.imageSrc} alt="Фотография Доктора" width={259} height={287} />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.occupation}>{props.occupation}</p>
    </li>
  );
};

export default SpecialistCard;
