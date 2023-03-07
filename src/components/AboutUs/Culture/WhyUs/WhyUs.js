import Container from "@/components/Layout/Container";
import styles from "./WhyUs.module.css";
import Image from "next/image";
import MSpecialists from "../../../../../public/img/MSpecialists.png";

const WhyUs = () => {
  return (
    <Container>
      <div className={styles.header}>
        <p className="eyebrows">Наши ценности</p>
        <h2>Мы работаем вот так</h2>
        <p>
          Мы считаем, что лучшая работа — та, которая приносит удовольствие
          поэтому мы постоянно развиваем и укрепляем нашу корпоративную
          культуру.
        </p>
      </div>
      <Image src={MSpecialists} alt="Специалисты" width={1110} height={693} />
    </Container>
  );
};
export default WhyUs;
