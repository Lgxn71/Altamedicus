import Container from "@/components/Layout/Container";
import styles from "./WhyUs.module.css";
import Image from "next/image";
import MSpecialists from "../../../../../public/img/MSpecialists.png";

const WhyUs = () => {
  return (
    <Container>
      <div className={styles.header}>
        <p className="eyebrows"> Работать с нами легко!</p>
        <h2>Мы даем возможность профессионального роста</h2>
        <p>
          Alta Medicus - это команда профессионалов, которые стремятся к
          постоянному совершенствованию и развитию.
        </p>
      </div>
      <Image src={MSpecialists} alt="Специалисты" width={1110} height={693} />
    </Container>
  );
};
export default WhyUs;
